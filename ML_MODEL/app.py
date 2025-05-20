from flask import Flask, request, jsonify
from flask_cors import CORS
from superset_ai import ModelLoader
import traceback

app = Flask(__name__)
CORS(app)  # Allow requests from your Next.js app

# Initialize the ML model
print("🔄 Initializing ML model...")
model_loader = ModelLoader()
print("✅ ML model initialized successfully!")

@app.route('/search', methods=['POST'])
def search():
    try:
        # Get the request data
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400
        
        query = data.get('query', '')
        
        if not query:
            return jsonify({"error": "Query parameter is required"}), 400
        
        print(f"🔍 Searching for: '{query}'")
        
        # Perform the search using the ML model
        results = model_loader.search(query)
        
        # Transform results to match your frontend expectations
        transformed_results = []
        for result in results:
            transformed_results.append({
                "title": result.get('Наименование ИС', 'Без названия'),
                "description": f"Регион: {result.get('Регион', 'Не указан')} | Контур: {result.get('Контур (ЕТС/интернет)', 'Не указан')}",
                "url": result.get('URL/ссылка', '#'),
                "score": 0.9,  # Default high score for ML results
            })
        
        print(f"✅ Found {len(transformed_results)} results")
        return jsonify(transformed_results)
    
    except Exception as e:
        print(f"❌ Search error: {str(e)}")
        print(f"📝 Traceback: {traceback.format_exc()}")
        
        # Return fallback results on error
        fallback_results = [{
            "title": f"Результат для запроса: '{query if 'query' in locals() else 'неизвестный запрос'}'",
            "description": "Это резервный результат из-за ошибки в ML модели",
            "url": "https://sdu.data.gov.kz/superset/dashboard/67",
            "score": 0.8,
        }]
        
        return jsonify(fallback_results)

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    try:
        return jsonify({
            "status": "healthy",
            "message": "ML Search API is running",
            "model_loaded": model_loader is not None
        })
    except Exception as e:
        return jsonify({
            "status": "unhealthy", 
            "error": str(e)
        }), 500

@app.route('/', methods=['GET'])
def home():
    """Home endpoint"""
    return jsonify({
        "message": "ML Search API",
        "version": "1.0",
        "endpoints": {
            "search": "POST /search",
            "health": "GET /health"
        }
    })

if __name__ == '__main__':
    print("🚀 Starting ML Search API...")
    print("📡 API will be available at: http://localhost:8001")
    print("🔍 Test endpoint: POST http://localhost:8001/search")
    print("💊 Health check: GET http://localhost:8001/health")
    print("=" * 50)
    
    try:
        app.run(host='0.0.0.0', port=8001, debug=True)
    except Exception as e:
        print(f"❌ Failed to start server: {e}")
        print(f"📝 Error details: {traceback.format_exc()}")