import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

/**
 * Logs in with email and password by sending a request to the login endpoint.
 * It checks if the email and password is connected to a registered user.
 * If the email and password matches a profile with a token the user is logged in and redirected to the home page.
 * If not the user gets an alert that the user is not registered and stays on the page.
 *
 * @param {object} profile - The user profile information.
 * @param {string} profile.email - The user's email address.
 * @param {string} profile.password - The user's password.
 *
 * @throws {Error} If there is an issue with the login process.
 *
 * @returns {Promise<void>} A promise when the login is successful
 *
 * @example
 * const profile = {
 *   email: "user@example.com",
 *   password: "password1234",
 * };
 * try {
 * await login(profile);
 * } catch (error) {
 * console.error(error.message)}
 *
 */

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
    console.error(error);
  }
}
