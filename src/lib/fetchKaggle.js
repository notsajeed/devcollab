export async function fetchKaggle(username) {
  try {
    // Kaggle doesn’t have a clean public API, so we usually scrape or use unofficial APIs.
    // For now, mock with dummy data so your UI works:
    return {
      username,
      competitions: 25,
      datasets: 10,
      notebooks: 42,
      followers: 120,
      following: 30,
      ranking: 15000, // placeholder global rank
    };
  } catch (error) {
    console.error("Error fetching Kaggle data:", error);
    return null;
  }
}
