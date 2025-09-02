// app/api/kaggle/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    // Kaggle doesn’t have a public user API
    // but we can hit their website JSON (undocumented).
    const res = await fetch(`https://www.kaggle.com/${username}.json`);

    if (!res.ok) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const data = await res.json();

    return NextResponse.json({
      username: data.user?.username || username,
      name: data.user?.displayName || username,
      bio: data.user?.bio || "No bio available",
      followers: data.user?.followersCount || 0,
      following: data.user?.followingCount || 0,
      competitions: data.user?.competitionCount || 0,
      notebooks: data.user?.scriptCount || 0,
      datasets: data.user?.datasetCount || 0,
    });
  } catch (error) {
    console.error("Kaggle API error:", error);
    return NextResponse.json({ error: "Failed to fetch Kaggle data" }, { status: 500 });
  }
}
