import { register } from "../../api/auth/register.mjs";

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
        console.log(error);
        alert("Failed to register profile");
      }
    });
  }
}
