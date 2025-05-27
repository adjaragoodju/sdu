import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface FeedbackRequest {
  name: string;
  email: string;
  feedback: string;
}

interface FeedbackResponse {
  id?: string;
  Name: string;
  Email: string;
  Description: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: FeedbackRequest = await req.json();
        const { name, email, feedback } = body;

        // Validation
        if (!name?.trim() || !email?.trim() || !feedback?.trim()) {
            return NextResponse.json(
                { error: "Все поля обязательны для заполнения" }, 
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                { error: "Неверный формат электронной почты" }, 
                { status: 400 }
            );
        }

        // Replace with your actual credentials
        const API_TOKEN = "suApp8HsRjNwOLWwdAq_Ko7csMY8gvuev6FcLsz9";
        const BASE_URL = "https://nocodb-web.sdu.gov.kz/api/v2";
        const TABLE_ID = "mww0a0qxp9yo6pl";

        console.log("Sending feedback to NocoDB...");

        const response = await axios.post<FeedbackResponse>(
            `${BASE_URL}/tables/${TABLE_ID}/records`,
            {
                Name: name.trim(),
                Email: email.trim(),
                Description: feedback.trim(),
            },
            {
                headers: {
                    "xc-token": API_TOKEN,
                    "Content-Type": "application/json",
                },
                timeout: 10000, // 10 seconds timeout
            }
        );

        console.log("Feedback sent successfully:", response.data);

        return NextResponse.json({ 
            message: "Обратная связь успешно отправлена",
            id: response.data.id 
        });

    } catch (error: unknown) {
        console.error("Feedback API error:", error);

        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') {
                return NextResponse.json(
                    { error: "Превышено время ожидания. Попробуйте позже." },
                    { status: 408 }
                );
            }

            if (error.response) {
                // Server responded with error status
                const status = error.response.status;
                const message = error.response.data?.message || error.response.data?.error || "Ошибка сервера";
                
                console.error(`NocoDB API error (${status}):`, error.response.data);
                
                return NextResponse.json(
                    { error: `Ошибка сервера (${status}): ${message}` },
                    { status: status >= 500 ? 500 : status }
                );
            } else if (error.request) {
                // Network error
                console.error("Network error:", error.request);
                return NextResponse.json(
                    { error: "Ошибка сети. Проверьте подключение к интернету." },
                    { status: 503 }
                );
            }
        }

        // Generic error handling
        const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";
        console.error("Unexpected error:", errorMessage);
        
        return NextResponse.json(
            { error: "Произошла внутренняя ошибка сервера" },
            { status: 500 }
        );
    }
}