import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  try {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const registerUser = await response.json();
    window.location.href = "/feed/ ";
    return registerUser;
  } catch (error) {
    console.log(error);
    alert(
      "Failed to register user, please check that the requirements are met."
    );
  }
}
