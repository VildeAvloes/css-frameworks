export function postTemplate(postData) {
  console.log(postData);
  const listElement = document.createElement("li");
  listElement.classList.add("card", "py-2", "my-3");
  listElement.id = postData.id;

  const postURL = document.createElement("a");
  postURL.classList.add("stretched-link");
  postURL.href = `post/index/id?=${postData.id}`;
  listElement.appendChild(postURL);

  // const postHeaderWrapper = document.createElement("div");
  // authorHeader.classList.add("row", "align-items-center", "mb-3", "mx-2");
  // listElement.appendChild(postHeaderWrapper);

  // const authorImgWrapper = document.createElement("div");
  // authorContentWrapper.classList.add("col-3", "col-md-2");
  // postHeaderWrapper.appendChild(authorImgWrapper);

  // const authorImg = document.createElement("img");
  // img.classList.add("rounded-circle", "w-100");
  // img.src = postData.media;
  // img.alt = `Profilephoto for ${postData.user}`;
  // authorImgWrapper.appendChild(authorImg);

  // const authorUserName = document.createElement("p");
  // authorUserName.classList.add("card-title", "fs-5", "col-5");
  // authorUserName.innerHTML = postData.user;
  // postHeaderWrapper.appendChild(authorUserName);

  const post = document.createElement("div");
  post.classList.add("mb-3", "mx-2", "py-2", "my-3");
  listElement.appendChild(post);

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

  if (postData.body) {
    const bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("card-body");
    post.appendChild(bodyWrapper);

    const body = document.createElement("p");
    body.classList.add("card-text");
    body.innerHTML = postData.body;
    bodyWrapper.appendChild(body);
  }

  if (postData.tags) {
    const tags = document.createElement("span");
    tags.classList.add("fw-bold");
    tags.innerHTML = postData.tags;
    post.appendChild(tags);
  }

  if (postData.created) {
    const timeWrapper = document.createElement("p");
    timeWrapper.classList.add("card-text");
    post.appendChild(timeWrapper);

    const time = document.createElement("small");
    time.classList.add("text-muted");
    if (postData.updated) {
      time.innerHTML = `Updated: ${postData.updated}`;
    } else {
      time.innerHTML = `Posted: ${postData.created}`;
    }
    timeWrapper.appendChild(time);
  }

  const reactionsWrapper = document.createElement("div");
  reactionsWrapper.classList.add("d-flex", "align-items-center", "mb-2");
  post.appendChild(reactionsWrapper);
  const reactions = document.createElement("i");
  reactions.classList.add("bi", "bi-heart", "fs-4", "me-2");
  const comments = document.createElement("i");
  comments.classList.add("bi", "bi-chat-right", "fs-4", "ms-2");
  reactionsWrapper.appendChild(reactions);
  reactionsWrapper.appendChild(comments);

  return listElement;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
  console.log(postDataList);
}

// export async function testTemplates() {
//   const posts = await postMethods.getPosts();
//   const post = posts[45];
//   const container = document.querySelector("#postFeed");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplates();
