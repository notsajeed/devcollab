export async function fetchLeetcode(username) {
  try {
    const res = await fetch(`/api/leetcode?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (err) {
    console.error("LeetCode fetch error:", err);
    return null;
  }
}
