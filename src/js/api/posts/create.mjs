import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const newPost = await response.json();

  console.log(createPostURL);
  console.log("newPost:", newPost);
  window.location.href = "/feed";
  return newPost;
}
