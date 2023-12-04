import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsURL);

  const posts = await response.json();

  return posts;
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  const postByID = await response.json();
  return postByID;
}
