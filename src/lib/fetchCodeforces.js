// lib/fetchCodeforces.js
export async function fetchCodeforces(username) {
  try {
    const res = await fetch(`/api/codeforces?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch Codeforces data");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
