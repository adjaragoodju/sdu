import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { query } = await req.json();

        if (!query || typeof query !== "string") {
            return NextResponse.json({ error: "Запрос введен неправильно" }, { status: 400 });
        }

        const { data } = await axios.post("http://localhost:8000/search", { query });

        const results = Array.isArray(data)
            ? data.map((item) => ({
                title: item["Название "] || "Без названия",
                link: item["ссылка"] || "#",
            }))
            : [];

        return NextResponse.json(results);
    } catch (error: unknown) {
        console.error("Search API error:", error);
        return NextResponse.json(
            { error: "Ошибка при поиске. Попробуйте позже." },
            { status: 500 }
        );
    }
}
