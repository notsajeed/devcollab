// app/api/codeforces/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json({ error: "Failed to fetch Codeforces data" }, { status: 500 });
    }

    const user = data.result[0];
    return NextResponse.json({
      username: user.handle,
      rating: user.rating || "Unrated",
      maxRating: user.maxRating || "Unrated",
      rank: user.rank || "Unknown",
      maxRank: user.maxRank || "Unknown",
      contribution: user.contribution || 0,
      friendOfCount: user.friendOfCount || 0,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching Codeforces data" }, { status: 500 });
  }
}
