// lib/fetchX.js
export async function fetchX(username) {
  try {
    const res = await fetch(`/api/x?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch X data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
