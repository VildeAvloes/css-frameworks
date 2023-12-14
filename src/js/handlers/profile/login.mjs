import { login } from "../../api/auth/login.mjs";

/**
 * Sets a form listener on the log in form to handle the login submissions.
 *
 * @function
 * @throws {Error} If there is an issue with the login process.
 */
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  try {
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        login(profile);
      });
    }
  } catch (error) {
    console.error(error);
    alert("Failed to login. Check your email and password.");
  }
}
