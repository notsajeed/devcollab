
export async function fetchDevpost(username) {
  try {
    const res = await fetch(`/api/devpost?username=${username}`);
    if (!res.ok) throw new Error("Failed to fetch Devpost data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
