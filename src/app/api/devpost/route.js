
import { NextResponse } from "next/server";

// Mock Devpost API
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "notsajeed";

  const mockData = {
    username,
    hackathonsParticipated: 12,
    projectsSubmitted: 8,
    awards: 3,
    followers: 150,
    following: 20,
  };

  return NextResponse.json(mockData);
}
