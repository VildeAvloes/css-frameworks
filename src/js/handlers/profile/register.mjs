import { register } from "../../api/auth/register.mjs";

/**
 * Sets a form listener on the register form to handle the register submissions.
 *
 * @function
 * @throws {Error} If there is an issue with the login process.
 */
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        register(profile);
        alert("You successfully registered a profile.");
        window.location.href = "/feed";
      } catch (error) {
        console.error(error);
        alert("Failed to register profile");
      }
    });
  }
}
