import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    const { name, email, feedback } = await req.json();

    if (!name || !email || !feedback) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const API_TOKEN = "YOUR TOKEN";
    const BASE_URL = "https://nocodb-web.sdu.gov.kz/api/v2";
    const TABLE_ID = "YOUR TABLE ID";

    try {
        await axios.post(
            `${BASE_URL}/tables/${TABLE_ID}/records`,
            {
                Name: name,
                Email: email,
                Description: feedback,
            },
            {
                headers: {
                    "xc-token": API_TOKEN,
                    "Content-Type": "application/json",
                },
            }
        );

        return NextResponse.json({ message: "Success" });
    } catch (error: unknown) {
        console.error("Feedback API error:", error);

        if (axios.isAxiosError(error)) {
            return NextResponse.json(
                { error: error.response?.data || error.message || 'An error occurred' },
                { status: 500 }
            );
        }

        else if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message || 'An error occurred' },
                { status: 500 }
            );
        }

        else {
            return NextResponse.json(
                { error: 'An unknown error occurred' },
                { status: 500 }
            );
        }
    }
}
