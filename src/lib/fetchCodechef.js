// lib/fetchCodechef.js
export async function fetchCodechef(username) {
  try {
    const res = await fetch(`/api/codechef?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch CodeChef data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
