// app/api/x/route.js
import { NextResponse } from "next/server";

// Mock X (Twitter) API
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "notsajeed";

  const mockData = {
    username,
    followers: 1200,
    following: 180,
    tweets: 350,
    likes: 890,
    retweets: 210,
  };

  return NextResponse.json(mockData);
}
