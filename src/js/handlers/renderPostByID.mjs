import { getPost } from "../api/posts/get.mjs";
import {
  getQueryStringParam,
  postTemplate,
  clearContainer,
} from "../templates/index.mjs";

export async function renderPost() {
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
}
