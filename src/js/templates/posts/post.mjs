import { load } from "../../storage/index.mjs";
import { formatDateString } from "../../handlers/index.mjs";

export function postTemplate(postData) {
  const profile = load("profile");

  let postDetails;

  if (location.pathname === "/feed/") {
    postDetails = document.createElement("li");
    const postURL = document.createElement("a");
    postURL.classList.add("stretched-link");
    postURL.href = `/feed/post/?id=${postData.id}`;
    postDetails.appendChild(postURL);
  } else {
    postDetails = document.createElement("div");
  }
  postDetails.classList.add("card", "py-2", "my-3");
  postDetails.id = postData.id;

  const postHeader = document.createElement("div");
  postHeader.classList.add("row", "align-items-center", "mx-1");
  postDetails.appendChild(postHeader);

  const authorAvatarWrapper = document.createElement("div");
  authorAvatarWrapper.classList.add("col-2", "col-md-3");
  postHeader.appendChild(authorAvatarWrapper);

  const authorAvatar = document.createElement("img");
  authorAvatar.classList.add("rounded", "w-100");

  if (postData.author.avatar === null) {
    authorAvatar.src = "/src/assets/images/profile-placeholder.png";
    authorAvatar.alt = `Example avatar for ${postData.name}`;
  } else {
    authorAvatar.src = postData.author.avatar;
    authorAvatar.alt = `Avatar for ${postData.name}`;
  }
  authorAvatarWrapper.appendChild(authorAvatar);

  const authorUserName = document.createElement("p");
  authorUserName.classList.add("card-title", "fs-5", "col");
  authorUserName.innerHTML = `@ ${postData.author.name}`;
  postHeader.appendChild(authorUserName);

  if (
    location.pathname === `/feed/post/` &&
    postData.author.name === profile.name
  ) {
    const editButton = document.createElement("a");
    editButton.id = "editPostButton";
    editButton.href = `/post/edit/?id=${postData.id}`;
    editButton.classList.add("btn", "button-sm", "btn-secondary", "col-3");
    editButton.innerHTML = `Edit <i class="bi bi-pencil"></i>`;
    postHeader.appendChild(editButton);
  }

  const post = document.createElement("div");
  post.classList.add("mb-3", "mx-2", "p-2", "my-3");
  postDetails.appendChild(post);

  if (postData.title) {
    const title = document.createElement("p");
    title.classList.add("card-title", "fs-5");
    title.innerHTML = postData.title;
    post.appendChild(title);
  }

  if (postData.media) {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("d-flex", "justify-content-center");
    post.appendChild(imgWrapper);

    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    imgWrapper.appendChild(img);
  }

  const bodyWrapper = document.createElement("div");
  bodyWrapper.classList.add("card-body");
  post.appendChild(bodyWrapper);

  if (postData.body) {
    const body = document.createElement("p");
    body.classList.add("card-text");
    body.innerHTML = postData.body;
    bodyWrapper.appendChild(body);
  }

  if (postData.tags) {
    const tags = document.createElement("span");
    tags.classList.add("fw-bold");
    tags.innerHTML = postData.tags;
    bodyWrapper.appendChild(tags);
  }

  const reactionsWrapper = document.createElement("div");
  reactionsWrapper.classList.add("d-flex", "align-items-center", "my-2");
  post.appendChild(reactionsWrapper);
  const reactions = document.createElement("i");
  reactions.classList.add("bi", "bi-heart", "fs-4", "me-2");
  const comments = document.createElement("i");
  comments.classList.add("bi", "bi-chat-right", "fs-4", "ms-2");
  reactionsWrapper.appendChild(reactions);
  reactionsWrapper.appendChild(comments);

  if (postData.updated) {
    const dateString = postData.updated;
    const formattedDate = formatDateString(dateString);

    const timeWrapper = document.createElement("p");
    timeWrapper.classList.add("card-text");
    post.appendChild(timeWrapper);

    const time = document.createElement("small");
    time.classList.add("text-muted");
    time.innerHTML = `Posted: ${formattedDate}`;
    timeWrapper.appendChild(time);
  }

  return postDetails;
}
