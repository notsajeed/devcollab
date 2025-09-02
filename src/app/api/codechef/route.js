// app/api/codechef/route.js
import { NextResponse } from "next/server";

// Mock API since CodeChef doesn’t provide public API
export async function GET() {
  const mockData = {
    username: "notsajeed",
    rating: 1850,
    stars: 3,
    globalRank: 15234,
    countryRank: 923,
    contests: 28,
  };

  return NextResponse.json(mockData);
}
