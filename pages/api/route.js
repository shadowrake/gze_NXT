import { getNews } from "@lib/mongo/read/news/news.js";
import { NextResponse } from "next/server";

export async function GET (req, res) {
    const players = await getNews()

    return NextResponse.json(players)
}