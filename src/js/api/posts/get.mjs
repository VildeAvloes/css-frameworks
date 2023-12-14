import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
/**
 * Fetches a list of post by doing a request to the social posts API.
 *
 * @returns {Promise<Array<Object>>} A promise is returned with an array of object if the fetch is successful.
 *
 * @example
 * try {
 *  const posts = await getPosts();
 *  console.log(posts)
 * } catch (error) {
 *  console.error(error.message)}
 */
export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}?_author=true`;

  const response = await authFetch(getPostsURL);

  const posts = await response.json();

  return posts;
}

/**
 * Fetches a post object with a specified ID from the social posts API.
 *
 * @param {string} id - The ID of the post to fetch.
 *
 * @returns {Promise<Object>} A promise is returned with an object if the fetch is successful.
 *
 * @throws {Error} If the provided ID is falsy.
 *
 * @example
 * try {
 *  const postID = "1234"
 *  const post = await getPost(postId)
 *  console.log(post)
 * } catch (error) {
 *  console.error(error.message)}
 */
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true`;

  const response = await authFetch(getPostURL);

  const postByID = await response.json();
  return postByID;
}
