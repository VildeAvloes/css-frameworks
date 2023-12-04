import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

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
