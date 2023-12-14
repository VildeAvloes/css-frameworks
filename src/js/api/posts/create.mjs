import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * Creates a new post with post data that is provided by sending it to the "create post"-endpoint.
 *
 * @param {Object} postData - The data for the new post.
 * @param {string} postData.title - The title of the post
 * @param {string} postData.body - The content of the post.
 * @param {string[]} postData.tags - An array of tags that are stringified.
 * @param {string} postData.media - The media for the post.
 *
 * @throws {Error} - If there is an issue with creating the post.
 *
 * @returns {Promise<Object>} A promise is returned with a new object containing the post information.
 *
 * @example
 * const postData = {
 *  title: "New Post",
 *  body: "This is the content of the post",
 *  tags: ["tag1", "tag2", "tag3"],
 *  media: "www.example-media-url.example"
 * } catch (error) {
 * console.error(error.message)
 * }
 */
export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const newPost = await response.json();

  return newPost;
}
