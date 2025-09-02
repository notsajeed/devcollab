import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    // Fetch GitHub profile
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("GitHub API error");
    const data = await res.json();

    // Return only useful fields
    return NextResponse.json({
      username: data.login,
      name: data.name,
      avatar: data.avatar_url,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
