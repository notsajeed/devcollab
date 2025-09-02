// lib/fetchTryhackme.js
export async function fetchTryhackme(username) {
  try {
    const res = await fetch(`/api/tryhackme?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch TryHackMe data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
