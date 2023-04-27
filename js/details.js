import { fetchSpecificPost, fetchPosts } from "./api/fetch-posts.js";
import { renderDetailedPost, renderCardPosts, renderComments } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { validateForm } from "./functions/validateForm.js";
import { postComment, fetchComments } from "./api/comments.js";
import { displayErrorMsg, displayCommentErrorMsg } from "./functions/displayMessage.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const form = document.querySelector("form");
const pageTitle = document.all[14];
const metaContentDescription = document.all[5];

const displayPosts = async () => {
  try {
    const detailedPost = await fetchSpecificPost(id);
    renderDetailedPost(detailedPost);

    pageTitle.innerText = `Healthy food | ${detailedPost.title.rendered}`;
    metaContentDescription.content = `Read ${detailedPost.title.rendered} blog post  from the Healthy food blog`;

    const latestPosts = await fetchPosts();
    renderCardPosts(latestPosts);
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

const displayComments = async () => {
  try {
    const comments = await fetchComments(id);
    renderComments(comments);
  } catch (error) {
    console.warn(error);
    displayCommentErrorMsg();
  }
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
