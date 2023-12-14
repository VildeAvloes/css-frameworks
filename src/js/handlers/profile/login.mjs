import { login } from "../../api/auth/login.mjs";

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
    console.log(error);
    alert("Failed to login. Check your email and password.");
  }
}
