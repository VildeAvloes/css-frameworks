import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Removes a post with a specified post ID by sending a request to the "delete post" api endpoint.
 *
 * @param {string} id - The id of the post that is going to be removed.
 *
 * @throws {Error} If the ID is not found.
 *
 * @returns {Promise<Object>} A promise that removes the object from the server if the response is successful.
 *
 * @example
 * const postID = "1234";
 * try {
 *  const response = await removePost(postId);
 *  console.log(response);
 * } catch (error) {
 * console.error(error.message)
 * }
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(removePostURL, {
    method,
  });

  return await response.json();
}
