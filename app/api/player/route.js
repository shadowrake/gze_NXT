import { getPlayers } from "@lib/mongo/read/staff";
import { NextResponse } from "next/server";

export async function GET (req, res) {
    const players = await getPlayers()

    return NextResponse.json(players)
}