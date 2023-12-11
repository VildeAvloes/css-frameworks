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
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
} else if (path === "/feed/") {
  templates.renderPosts();
} else if (path === "/feed/post/") {
  templates.renderPost();
}
