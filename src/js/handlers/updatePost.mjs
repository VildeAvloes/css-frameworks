import { updatePost } from "../api/posts/index.mjs";

export function setUpdatePostFormListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      if (post.tags) {
        post.tags = post.tags.split(" , ").map((tag) => tag.trim());
      }

      updatePost(post);
    });
  }
}
