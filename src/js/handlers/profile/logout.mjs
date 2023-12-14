import { remove } from "../../storage/index.mjs";

/**
 * Sets a form listener on the log out anchor tag to handle logout actions.
 *
 * @function
 * @throws {Error} If there is an issue with the logout process.
 */
export function setLogOutListener() {
  const logOutButton = document.querySelector("#logOut");
  try {
    if (logOutButton) {
      logOutButton.addEventListener("click", (event) => {
        event.preventDefault();

        remove("token");
        window.location.href = "/";
      });
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}
