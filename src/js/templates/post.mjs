import * as postMethods from "../api/posts/index.mjs";
import * as component from "../templates/components.mjs";

export function postTemplate(postData) {
  console.log(postData);
  console.log(postData.author);

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
  postHeader.classList.add("align-items-center", "mb-3", "mx-2");
  postDetails.appendChild(postHeader);

  // if (postData.author.avatar) {
  //   const authorImgWrapper = document.createElement("div");
  //   authorImgWrapper.classList.add("col-3", "col-md-2");
  //   postHeader.appendChild(authorImgWrapper);

  //   const authorImg = document.createElement("img");
  //   authorImg.classList.add("rounded-circle", "w-100");
  //   authorImg.src = postData.author.avatar;
  //   authorImg.alt = `Image from ${postData.author.avatar}`;
  //   authorImgWrapper.appendChild(authorImg);
  // } else {
  //   authorImg.src = "";
  // }

  const authorUserName = document.createElement("p");
  authorUserName.classList.add("card-title", "fs-5");
  authorUserName.innerHTML = `@ ${postData.author.name}`;
  postHeader.appendChild(authorUserName);

  const post = document.createElement("div");
  post.classList.add("mb-3", "mx-2", "py-2", "my-3");
  postDetails.appendChild(post);

  if (postData.title) {
    const title = document.createElement("p");
    title.classList.add("card-title", "fs-5");
    title.innerHTML = postData.title;
    post.appendChild(title);
  }

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.appendChild(img);
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
    const formattedDate = component.formatDateString(dateString);

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

export async function renderPosts() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#postFeed");

  container.innerHTML = "";

  container.append(...posts.map(postTemplate));
  console.log(posts);
}

renderPosts();

export async function renderPost() {
  const postId = component.getQueryStringParam("id");
  const container = document.querySelector("#postByID");
  const postById = await postMethods.getPost(postId);

  const renderPostTemplate = (postData, id) => {
    container.innerHTML = "";
    container.append(postTemplate(postData, id));
  };

  renderPostTemplate(postById);
}

renderPost();
