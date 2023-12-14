import * as listeners from "./handlers/index.mjs";

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
      listeners.setLogOutListener();
      break;
    case "/feed/post/":
      listeners.renderProfileThumbnail();
      listeners.renderPost();
      listeners.setLogOutListener();
      break;
    case "/post/create/":
      listeners.setCreatePostFormListener();
      listeners.setLogOutListener();
      break;
    case "/post/edit/":
      listeners.setUpdatePostFormListener();
      listeners.setDeletePostListener();
      listeners.setLogOutListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      listeners.setLogOutListener();
      break;
    case "/profile/":
      listeners.setLogOutListener();
      break;

    default:
  }
}
