import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

async function testTemplates() {
  const posts = await postMethods.getPosts();
  const post = posts[45];
  const container = document.querySelector("#postFeed");
  templates.renderPostTemplates(posts, container);
}

testTemplates();

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const post = posts[45];
//   const container = document.querySelector("#post");
//   templates.renderPostTemplate(post, container);
// }

// testTemplate();

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts().then(console.log);

// Examples
// post.createPost({
//   title: "Example Post 4",
//   body: "Example text in body 4",
// });

// updatePost({
//     id: 8932,
//     title: "Example Post updated",
//     body: "Example text in body",
//   });

//   removePost(8932);
