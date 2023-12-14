import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

/**
 * Updates an existing post with post data that is provided by sending it to the "update post"-endpoint.
 *
 * @param {Object} postData - The updated data for the new post.
 * @param {string} postData.id - The id of the post to update.
 * @param {string} postData.title - The updated title of the post
 * @param {string} postData.body - The updated content of the post.
 * @param {string[]} postData.tags - An updated array of tags that are stringified.
 * @param {string} postData.media - The updated media for the post.
 *
 * @throws {Error} - If the post is missing an valid ID.
 *
 * @returns {Promise<Object>} A promise is returned with a updated object containing the new post information, but same ID.
 *
 * @example
 * const updatedPost = {
 *  id: "1234",
 *  title: "Updated Post",
 *  body: "This is the updated content of the post",
 *  tags: ["update1", "update2", "update3"],
 *  media: "www.updated-example-media-url.example"
 * } catch (error) {
 * console.error(error.message)
 * }
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
