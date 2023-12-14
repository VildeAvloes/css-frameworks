import { load } from "../storage/index.mjs";

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options = {}) {
  try {
    return fetch(url, {
      ...options,
      headers: headers(),
    });
  } catch (error) {
    console.log(error, "Failed to fetch API");
  }
}
