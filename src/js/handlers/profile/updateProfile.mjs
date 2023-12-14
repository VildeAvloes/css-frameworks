import { getProfile, updateProfile } from "../../api/profiles/index.mjs";
import { load } from "../../storage/index.mjs";

/**
 * Sets a form listener for updating profile.
 * Gets existing profile data, populates the form and
 * handles the form submission.
 *
 * @async
 * @function
 * @throws {Error} If there is an issue fetching the post details from the social API.
 */
export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        profile.name = name;
        profile.email = email;

        updateProfile(profile);
      } catch (error) {
        console.error(error);
        alert("Failed to update profile");
      }
    });
  }
}
