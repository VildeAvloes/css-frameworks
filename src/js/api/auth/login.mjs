import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  try {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const { accessToken, ...profileUser } = await response.json();

    if (profileUser && accessToken) {
      storage.save("token", accessToken);
      storage.save("profile", profileUser);
      window.location.href = "/feed";
    } else {
      alert("User is not registered.");
    }
  } catch (error) {
    console.log(error);
  }
}
