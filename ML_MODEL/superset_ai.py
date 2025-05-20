import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer, util
import torch
import os

path = '/app/Датасет для поисковика.xlsx'

class ModelLoader:
    def __init__(self):
        # Load embedded corpus
        try:
            self.embedded_corpuses = torch.load('./embedded_corpus_v3.pt', map_location=torch.device('cpu'))
            print("✅ Loaded embedded corpus successfully")
        except FileNotFoundError:
            print("⚠️  Warning: embedded_corpus_v3.pt not found, using empty corpus")
            self.embedded_corpuses = {}
        except Exception as e:
            print(f"⚠️  Error loading corpus: {e}")
            self.embedded_corpuses = {}
        
        # Load dataset
        try:
            # Try different possible paths
            possible_paths = [
                './Датасет для поисковика.xlsx',
                './dataset.xlsx', 
                './data.xlsx',
                '/app/Датасет для поисковика.xlsx'
            ]
            
            self.dataset = None
            for path_attempt in possible_paths:
                try:
                    self.dataset = pd.read_excel(path_attempt)
                    print(f"✅ Loaded dataset from: {path_attempt}")
                    break
                except FileNotFoundError:
                    continue
            
            if self.dataset is None:
                print("⚠️  No Excel dataset found, creating mock data")
                # Create a simple mock dataset
                self.dataset = pd.DataFrame({
                    'Регион': ['Астана', 'Алматы', 'Шымкент'],
                    'Наименование ИС': ['Цифровая карта семьи', 'Мониторинг заявок', 'E-обращения'],
                    'URL/ссылка': ['https://sdu.data.gov.kz/superset/dashboard/67', 
                                   'https://sdu.data.gov.kz/superset/dashboard/70/',
                                   'https://sdu.data.gov.kz/superset/dashboard/369/'],
                    'Контур (ЕТС/интернет)': ['интернет', 'интернет', 'интернет']
                })
                
        except Exception as e:
            print(f"⚠️  Error loading dataset: {e}")
            # Create backup mock data
            self.dataset = pd.DataFrame({
                'Регион': ['Тест', 'Тест'],
                'Наименование ИС': ['Mock Data 1', 'Mock Data 2'],
                'URL/ссылка': ['#', '#'],
                'Контур (ЕТС/интернет)': ['тест', 'тест']
            })
        
        # Set device
        self.dev = torch.device('cpu')
        
        # Load SentenceTransformer model
        try:
            # First, check if LaBSE folder exists locally
            local_labse_path = os.path.join(os.getcwd(), 'LaBSE')
            
            if os.path.exists(local_labse_path) and os.path.isdir(local_labse_path):
                print(f"✅ Found local LaBSE model at: {local_labse_path}")
                self.model = SentenceTransformer(local_labse_path).to(self.dev)
                print("✅ Successfully loaded local LaBSE model")
            else:
                print("⚠️  Local LaBSE model not found, downloading from HuggingFace...")
                print("📥 This may take a few minutes for the first time...")
                
                # Use the correct HuggingFace model name for LaBSE
                self.model = SentenceTransformer('sentence-transformers/LaBSE').to(self.dev)
                print("✅ Successfully downloaded and loaded LaBSE model from HuggingFace")
                
        except Exception as e:
            print(f"❌ Error loading LaBSE model: {e}")
            print("🔄 Trying fallback model...")
            
            try:
                # Fallback to a smaller, faster model
                self.model = SentenceTransformer('all-MiniLM-L6-v2').to(self.dev)
                print("✅ Successfully loaded fallback model (all-MiniLM-L6-v2)")
            except Exception as fallback_error:
                print(f"❌ Fallback model also failed: {fallback_error}")
                raise Exception("Could not load any SentenceTransformer model")

    def search(self, query_corpus: str):
        try:
            # Encode the query
            question_embedding = self.model.encode(query_corpus, convert_to_tensor=True)
            
            # If we have embedded corpuses, do semantic search
            if self.embedded_corpuses and len(self.embedded_corpuses) > 0:
                hits = util.semantic_search(question_embedding, self.embedded_corpuses)[0]
                corpus_ids = [hit['corpus_id'] for hit in hits[:10]]
                
                # Filter dataset based on corpus IDs
                if len(corpus_ids) > 0:
                    result_dataset = self.dataset[self.dataset.index.isin(corpus_ids)].reindex(corpus_ids).reset_index(drop=True)
                else:
                    result_dataset = self.dataset.head(3)  # Return first 3 if no matches
            else:
                # If no embedded corpus, do simple text search
                print("⚠️  No embedded corpus available, using simple text search")
                query_lower = query_corpus.lower()
                
                # Simple search in the dataset
                mask = (
                    self.dataset['Наименование ИС'].str.lower().str.contains(query_lower, na=False) |
                    self.dataset['Регион'].str.lower().str.contains(query_lower, na=False)
                )
                
                result_dataset = self.dataset[mask].head(3)
                
                # If no matches found, return first 3 rows
                if len(result_dataset) == 0:
                    result_dataset = self.dataset.head(3)
            
            # Return the results in the expected format
            return result_dataset[['Регион', 'Наименование ИС', 'URL/ссылка', 'Контур (ЕТС/интернет)']].to_dict(orient='records')[:3]
            
        except Exception as e:
            print(f"❌ Error in search: {e}")
            # Return fallback results
            return [
                {
                    'Регион': 'Астана',
                    'Наименование ИС': f'Результат для запроса: "{query_corpus}"',
                    'URL/ссылка': 'https://sdu.data.gov.kz/superset/dashboard/67',
                    'Контур (ЕТС/интернет)': 'интернет'
                }
            ]