import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

export default function router() {
  const path = location.pathname;
  switch (path) {
    case "/profile/login/":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      break;
    case "/feed/":
      listeners.renderProfileThumbnail();
      listeners.renderPosts();
      listeners.setSearchFormListener();
      break;
    case "/feed/post/":
      listeners.renderProfileThumbnail();
      listeners.renderPost();
      break;
    case "/post/create/":
      listeners.setCreatePostFormListener();
      break;
    case "/post/edit/":
      listeners.setUpdatePostFormListener();
      listeners.setDeletePostListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      break;

    default:
  }
}
