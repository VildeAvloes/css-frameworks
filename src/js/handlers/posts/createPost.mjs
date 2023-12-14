import { createPost } from "../../api/posts/create.mjs";

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
        console.log(error);
        alert("Failed to create post.");
      }
    });
  }
}
