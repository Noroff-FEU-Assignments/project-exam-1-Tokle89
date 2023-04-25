import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { validateForm } from "./functions/validateForm.js";
import { postComment } from "./api/comments.js";
import { fetchComments } from "./api/comments.js";
import { renderComments } from "./render-posts/render-posts.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const form = document.querySelector("form");
const pageTitle = document.all[14];
const metaContentDescription = document.all[5];

const displayPosts = async () => {
  const detailedPost = await fetchDetailedPost(id);
  renderPost(detailedPost);

  pageTitle.innerText = `Healthy food | ${detailedPost.title.rendered}`;
  metaContentDescription.content = `Read more about  ${detailedPost.title.rendered} blog post  from the Healthy food blog`;

  const latestPosts = await fetchPosts();
  renderCardPosts(latestPosts);
};

const displayComments = async () => {
  const comments = await fetchComments(id);
  renderComments(comments);
};

toggleMenu();
displayPosts();
displayComments();
validateForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const [name, email, comment] = event.target.elements;
  postComment(name, email, comment, id);
  form.reset();
  fetchComments(id);
});
