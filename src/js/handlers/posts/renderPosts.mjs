import { getPosts } from "../../api/posts/get.mjs";
import { postTemplate, clearContainer } from "../../templates/index.mjs";

/**
 * Renders a list of post by fetching the post data and displaying them in
 * a container in the feed using post templates.
 * The posts are filtered to at least include title and body content.
 *
 * @async
 * @function
 * @returns {void}
 */
export async function renderPosts() {
  try {
    const posts = await getPosts();
    const feedContainer = document.querySelector("#postFeed");

    if (feedContainer) {
      clearContainer(feedContainer);
    }

    const postsWithContent = posts.filter((post) => post.title && post.body);

    feedContainer.append(...postsWithContent.map(postTemplate));
  } catch (error) {
    console.error(error, "Failed to render posts.");
  }
}
