// lib/fetchHackerrank.js
export async function fetchHackerrank(username) {
  try {
    const res = await fetch(`/api/hackerrank?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch HackerRank data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
