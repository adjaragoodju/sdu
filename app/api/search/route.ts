import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { query } = await req.json();

        if (!query || typeof query !== "string") {
            return NextResponse.json({ error: "Запрос введен неправильно" }, { status: 400 });
        }

        // Use your working ML model
        const ML_MODEL_URL = process.env.ML_MODEL_URL || "http://localhost:8001/search";
        
        console.log(`🔍 Searching with ML model: "${query}"`);
        
        try {
            const { data } = await axios.post(ML_MODEL_URL, { 
                query: query
            }, {
                timeout: 10000, // 10 second timeout
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log(`✅ ML model returned ${data.length} results`);
            return NextResponse.json(data);

        } catch (mlError) {
            console.error("ML model error:", mlError);
            
            // Fallback to mock results if ML model fails
            const fallbackResults = [
                {
                    title: `Результаты для: "${query}"`,
                    description: "Резервный результат (ML модель недоступна)",
                    url: "https://sdu.data.gov.kz/superset/dashboard/67",
                    score: 0.8
                }
            ];
            
            return NextResponse.json(fallbackResults);
        }

    } catch (error: unknown) {
        console.error("Search API error:", error);
        return NextResponse.json(
            { error: "Ошибка при поиске. Попробуйте позже." },
            { status: 500 }
        );
    }
}