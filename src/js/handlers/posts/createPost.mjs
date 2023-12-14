import { createPost } from "../../api/posts/create.mjs";

/**
 * Sets a submit form listener for creating a new post.
 * When the form is submitted, it prevents a default submission,
 * takes the form data, creates a new post and redirect the user to the
 * feed.
 *
 * @async
 * @function
 * @returns {void}
 */
export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        if (post.tags) {
          post.tags = post.tags.split(" , ").map((tag) => tag.trim());
        } else {
          post.tags = [];
        }

        createPost(post);
        alert("Your post was successfully created!");
        window.location.href = "/feed";
      } catch (error) {
        console.error(error);
        alert("Failed to create post.");
      }
    });
  }
}
