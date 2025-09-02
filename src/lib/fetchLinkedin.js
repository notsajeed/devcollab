// lib/fetchLinkedin.js
export async function fetchLinkedin(username) {
  try {
    const res = await fetch(`/api/linkedin?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch LinkedIn data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
