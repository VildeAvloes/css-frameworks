import { getPost, removePost } from "../../api/posts/index.mjs";

/**
 * Sets a click event listener to the delete button for the user to delete post.
 * Throws an alert for the user to confirm and sends a delete request.
 * When post is deleted the user is redirected to feed page.
 *
 * @async
 * @function
 * @returns {void}
 */
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
      console.error("Error deleting the post:", error);
      alert("Error deleting post");
    }
  });
}
