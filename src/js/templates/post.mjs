export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML += `<li class="card py-2 my-3" id=${postData.id}>
                        <a href="post/index/id=${postData.id}"
                            <div class="mb-3 mx-2">
                                <p class="card-title fs-5">${postData.title}</p>
                                <div class="card-body">
                                <p class="card-text">
                                ${postData.body}
                                <span class="fw-bold">${postData.tags}</span>
                                </p>
                            <img
                                src=${postData.media}
                                class="img-fluid"
                            />
                            </div>
                                <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-heart fs-4 me-2"></i>
                                <i class="bi bi-chat-right fs-4 ms-2"></i>
                                </div>
                                
                                <p class="card-text">
                                <small class="text-muted">Posted:${postData.created}</small>
                                </p>
                          
                            </div>
                        </a></li>`;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
  console.log(postDataList);
}

export async function testTemplates() {
  const posts = await postMethods.getPosts();
  const post = posts[45];
  const container = document.querySelector("#postFeed");
  templates.renderPostTemplates(posts, container);
}

testTemplates();
