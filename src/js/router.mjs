import * as listeners from "./handlers/index.mjs";

/**
 * Sets up a routing behavior for the event listeners based on the
 * current URL path.
 * The function ensures that the appropriate listeneres is being called
 * on the correct pages and the correct actions are taken.
 *
 * @returns {void }
 */
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
      listeners.setSortButtonListeners();
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
