// app/api/tryhackme/route.js
import { NextResponse } from "next/server";

// Mock TryHackMe API
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "notsajeed";

  const mockData = {
    username,
    points: 1234,
    badges: 8,
    roomsCompleted: 42,
    activeDays: 180,
    rank: 1500,
  };

  return NextResponse.json(mockData);
}
