import { API_SOCIAL_URL } from "../../src/js/api/api.js";

const registerUserForm = document.querySelector("#registerUserForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

/**
 * API call that registers the user
 * @param {string} url
 * @param {any} userData
 * ``` js
 * registerUser(registerUrl, userToRegister);
 */

async function registerUser(url, userData) {
  console.log(url, userData);
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: "my_username",
  email: "first.last@stud.noroff.no",
  password: "UzI1NiIsInR5cCI",
};

const registerUrl = `${API_SOCIAL_URL}/auth/register`;

registerUser(registerUrl, userToRegister);
