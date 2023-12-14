import { getPosts } from "../../api/posts/index.mjs";
import { postTemplate, clearContainer } from "../../templates/index.mjs";

/**
 * Sorts an array of posts in order, the oldest or latest.
 *
 * @param {Array<object>} posts - The array of posts to be sorted
 * @param {string} sortOrder - The order for the post to be sorted.
 *
 * @returns {Array<object>} Returns the post in a sorted array.
 */
function sortPosts(posts, sortOrder) {
  if (sortOrder !== "oldest" && sortOrder !== "latest") {
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

/**
 * Set an event listener for the sort button, sorting latest or oldest posts.
 *
 * @async
 * @function
 *
 * @throws {Error} If there is a problem with fetching the posts from the API.
 */
export async function setSortButtonListeners() {
  const latestButton = document.querySelector("#latestButton");
  const oldestButton = document.querySelector("#oldestButton");
  const sortButton = document.querySelector("#sortButton");
  const sortedPostsContainer = document.querySelector("#postFeed");

  try {
    const posts = await getPosts();

    /**
     * Renders the posts in the specified order and updates the container
     * with the sorted posts.
     * @param {string} sortOrder - The order which the posts should be sorted in
     */
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
    console.error(error, "Failed to sort posts");
  }
}
