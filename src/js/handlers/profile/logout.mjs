import { remove } from "../../storage/index.mjs";

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
    console.log(error);
    alert("Something went wrong");
  }
}
