import { getPosts } from "../../api/posts/index.mjs";
import { postTemplate, clearContainer } from "../../templates/index.mjs";

function sortPosts(posts, sortOrder) {
  if (sortOrder !== "oldest" && sortOrder !== "latest") {
    console.log(sortOrder);
    return posts;
  }

  const sortedPosts = [...posts];

  sortedPosts.sort((postA, postB) => {
    const dateA = new Date(postA.created);
    const dateB = new Date(postB.created);
    return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
  });
  return sortedPosts;
}

export async function setSortButtonListeners() {
  const latestButton = document.querySelector("#latestButton");
  const oldestButton = document.querySelector("#oldestButton");
  const sortButton = document.querySelector("#sortButton");
  const sortedPostsContainer = document.querySelector("#postFeed");

  try {
    const posts = await getPosts();

    function renderSortedPosts(sortOrder) {
      const sortedPosts = sortPosts(posts, sortOrder);
      clearContainer(sortedPostsContainer);
      sortedPostsContainer.append(...sortedPosts.map(postTemplate));
    }

    latestButton.addEventListener("click", () => {
      renderSortedPosts("latest");
      sortButton.textContent = "Latest";
    });

    oldestButton.addEventListener("click", () => {
      renderSortedPosts("oldest");
      sortButton.textContent = "Oldest";
    });
  } catch (error) {
    console.log(error, "Failed to sort posts");
  }
}
