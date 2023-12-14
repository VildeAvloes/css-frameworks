import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Registers a new user with username, email and password by sending a request to the register endpoint.
 * If registration requirements are met the user get registrated and redirected to home page.
 * If not and alert gets thrown that the registration failed.
 *
 * @param {Object} profile - The user profile information.
 * @param {string} profile.email - The user's email address.
 * @param {string} profile.password - The user's password.
 * @param {string} profile.name - The username of the user.
 *
 * @throws {Error} If there is an issue with the registration process.
 *
 * @returns {Promise<object>} A promise returns an object when the registration is successful.
 *
 * @example
 * const profile = {
 *  email: "user@example.com",
 *  password: "password1234",
 *  username: "exampleUser"
 * };
 * try {
 * const registeredUser = await register(profile);
 * console.log(registeredUser);
 * } catch (error) {
 * console.error(error.message)
 * }
 */
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
    console.error(error);
    alert(
      "Failed to register user, please check that the requirements are met."
    );
  }
}
