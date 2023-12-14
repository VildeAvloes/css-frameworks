import { getPosts } from "../api/posts/get.mjs";
import { postTemplate, clearContainer } from "../templates/index.mjs";

export async function renderPosts() {
  const posts = await getPosts();
  const feedContainer = document.querySelector("#postFeed");

  if (feedContainer) {
    clearContainer(feedContainer);
  }

  // const postsWithContent = posts.filter((post) => post.title && post.body);

  feedContainer.append(...posts.map(postTemplate));
  console.log(posts);
}
