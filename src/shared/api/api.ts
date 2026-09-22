const baseUrl = 'http://localhost:8080/api';

export async function api(endpoint: string) {
  try {
    const response = await fetch(baseUrl + endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
