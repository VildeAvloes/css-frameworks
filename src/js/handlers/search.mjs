import { getPosts } from "../api/posts/index.mjs";
import { postTemplate, clearContainer } from "../templates/index.mjs";

export async function setSearchFormListener() {
  const form = document.querySelector("#searchForm");
  const input = document.querySelector("#searchInput");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const searchTerm = input.value.trim().toLowerCase();
      const posts = await getPosts();

      const filteredPosts = posts.filter(
        (post) =>
          (post.title && post.title.toLowerCase().includes(searchTerm)) ||
          (post.author.name &&
            post.author.name.toLowerCase().includes(searchTerm)) ||
          (post.body && post.body.toLowerCase().includes(searchTerm)) ||
          (post.tags &&
            post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
      );

      const searchContainer = document.querySelector("#postFeed");
      clearContainer(searchContainer);
      searchContainer.append(...filteredPosts.map(postTemplate));
    });
  }
}