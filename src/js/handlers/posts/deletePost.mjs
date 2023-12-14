import { getPost, removePost } from "../../api/posts/index.mjs";

export async function setDeletePostListener() {
  const deleteButton = document.querySelector("#deleteButton");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  deleteButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const post = await getPost(id);
      if (post) {
        const confirmDelete = confirm(
          "Are you sure you want to delete this post?"
        );

        if (confirmDelete) {
          await removePost(id);

          alert("You successfully deleted the post.");
          window.location.href = "/feed/";
        }
      } else console.log("Post not found");
    } catch (error) {
      console.log("Error deleting the post:", error);
    }
  });
}
