import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

/**
 * Fetches profiles from the social profiles endpoint.
 *
 * @returns {Promise<Array>} A promise with an array of objects is returned.
 *
 * @throws {Error} IF there is an issue fetching the profiles.
 *
 * @example
 * try {
 *  const profiles = await getProfiles();
 *  console.log(profiles)
 * }catch(error) {
 *  console.error(error.message)}
 */
export async function getProfiles() {
  const getProfilesURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfilesURL);

  const profiles = await response.json();

  return profiles;
}

/**
 * Fetches a profile by name from the social profiles endpoint.
 *
 * @param {string} name - The name for the profile to fetch.
 *
 * @returns {Promise<Object>} A promise returns with the profile object.
 *
 * @throws {Error} If the profile name is not provided or isn't possible to fetch.
 *
 * @example
 * try {
 *  const profileName = "exampleProfile";
 *  const profile = await getProfile(profileName)
 *  console.log(profile)
 * } catch (error) {
 *  console.error(error.message)
 * }
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a profile name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  const profileByName = await response.json();
  return profileByName;
}
