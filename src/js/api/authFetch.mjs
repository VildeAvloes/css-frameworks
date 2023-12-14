import { load } from "../storage/index.mjs";

/**
 * Generate the headers for an authenticated request.
 *
 * @returns {Object} An object containing the required headers.
 */
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Performs a fetch request with the authentication headers.
 * 
 * @param {string} url - The URL for the fetch request. 
 * @param {Object} [options={}] - Optional configuration for the fetch. 
 * 
 * @returns {Promise<Response>} A promise that returns a response object.
 * 
 * @throws {Error} Trown if the fetch request fails.
 * 

 */
export async function authFetch(url, options = {}) {
  try {
    return fetch(url, {
      ...options,
      headers: headers(),
    });
  } catch (error) {
    console.error(error, "Failed to fetch API");
  }
}
