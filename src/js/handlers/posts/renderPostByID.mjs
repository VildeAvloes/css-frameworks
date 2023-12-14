import { getPost } from "../../api/posts/get.mjs";
import { getQueryStringParam } from "../../handlers/index.mjs";
import { clearContainer, postTemplate } from "../../templates/index.mjs";

/**
 * Renders a single post by ID from the query string,
 * updating the title element, and rendering the post in the postTemplate
 * in the container.
 * @async
 * @function
 * @returns {void}
 */
export async function renderPost() {
  try {
    const postId = getQueryStringParam("id");
    const postContainer = document.querySelector("#postByID");
    const postById = await getPost(postId);

    const titleElement = document.querySelector("title");

    if (titleElement) {
      titleElement.innerHTML = `${postById.title} | Hello!`;
    }

    const renderPostTemplate = (postData, id) => {
      clearContainer(postContainer);
      postContainer.append(postTemplate(postData, id));
    };

    renderPostTemplate(postById);
  } catch (error) {
    console.error(error, "Failed to render post by ID.");
  }
}
