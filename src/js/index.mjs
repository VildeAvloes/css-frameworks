import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostFormListener();
} else if (path === "/feed/") {
  templates.renderPosts();
} else if (path === "/feed/post/") {
  templates.renderPost();
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const post = posts[45];
//   const container = document.querySelector("#post");
//   templates.renderPostTemplate(post, container);
// }

// testTemplate();

// postMethods.createPost({
//   title: "Example Post 4",
//   body: "Example text in body 4",
// });

// updatePost({
//     id: 8932,
//     title: "Example Post updated",
//     body: "Example text in body",
//   });

//   removePost(8932);
