import { NextResponse } from "next/server";

export async function GET(req) {
  const username = req.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    // LeetCode unofficial API endpoint
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    const data = await res.json();

    // Normalize data for frontend
    return NextResponse.json({
      username,
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      ranking: data.ranking || "N/A",
      contributionPoints: data.contributionPoints || 0,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch LeetCode data" }, { status: 500 });
  }
}
