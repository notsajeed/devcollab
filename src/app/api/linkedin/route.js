// app/api/linkedin/route.js
import { NextResponse } from "next/server";

// Mock LinkedIn API
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "notsajeed";

  const mockData = {
    username,
    connections: 523,
    endorsements: 48,
    recommendations: 12,
    posts: 35,
    profileViews: 1020,
  };

  return NextResponse.json(mockData);
}
