
import { NextResponse } from "next/server";

export async function GET() {
  const mockData = {
    username: "notsajeed",
    badges: 5,
    certificates: 3,
    problemsSolved: 420,
    contests: 12,
    rank: "Gold",
  };

  return NextResponse.json(mockData);
}
