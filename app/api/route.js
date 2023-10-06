import { getTeamSoon } from "@lib/mongo/read/teams/teamSoon.js";
import { NextResponse } from "next/server";

export async function GET (req, res) {
    const players = await getTeamSoon()

    return NextResponse.json(players)
}