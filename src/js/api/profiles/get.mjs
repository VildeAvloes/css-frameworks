import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfiles() {
  const getProfilesURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfilesURL);

  const profiles = await response.json();

  return profiles;
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a profile name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  const profileByName = await response.json();
  return profileByName;
}
