import { getPost, updatePost } from "../../api/posts/index.mjs";

export async function setUpdatePostFormListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        post.id = id;

        if (post.tags) {
          post.tags = post.tags.split(" , ").map((tag) => tag.trim());
        } else {
          post.tags = [];
        }

        updatePost(post);
        alert("Your post was successfully updated!");
        window.location.href = `/feed/post/?id=${post.id}`;
      } catch (error) {
        console.log(error);
        alert("Failed to update post.");
      }
    });
  }
}
