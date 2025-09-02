export async function fetchTryHackMe(username) {
  try {
    const res = await fetch(`/api/github?username=${username}`);
    if (!res.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
