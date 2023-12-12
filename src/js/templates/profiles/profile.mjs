// import * as postMethods from "../api/posts/index.mjs";

// export function profileTemplate(profile) {
//   return profileDetails;
// }

// export async function renderPosts() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#postFeed");

//   container.innerHTML = "";

//   container.append(...posts.map(postTemplate));
//   console.log(posts);
// }

// renderPosts();

// export async function renderPost() {
//   const postId = component.getQueryStringParam("id");
//   const container = document.querySelector("#postByID");
//   const postById = await postMethods.getPost(postId);

//   const renderPostTemplate = (postData, id) => {
//     container.innerHTML = "";
//     container.append(postTemplate(postData, id));
//   };

//   renderPostTemplate(postById);
// }

// renderPost();
