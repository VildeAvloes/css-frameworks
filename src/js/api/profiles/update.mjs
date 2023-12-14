import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

/**
 * Updates the user profile with provided data by sending a request to the social profiles endpoint.
 *
 * @param {Object} profileData - The data to update the user profile.
 * @param {string} profileData.avatar - The updated avatar for the user profile.
 * @param {string} profileData.banner - The updated banner for the user profile.
 *
 * @returns {Promise<Object>} A promise is returned if the update is successfull with the new data.
 *
 * @throws {Error} If the profileData is unable to fetch or is not provided.
 *
 * @example
 * try {
 * const newProfileData = {
 *  avatar: "https://example.com/avatar.jpeg"
 *  banner: "https://example.com/banner.jpeg"
 * const updatedProfile = await updateProfile(newProfileData);
 * console.log(updatedProfile);
 * } catch(error) {
 * console.error(error.message)
 * }
 */
export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
