import { fetchSpecificPost, fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost, renderPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { removeSpinner } from "./functions/removeSpinner.js";
import { displayErrorMsg } from "./functions/displayMessage.js";

const displayPosts = async () => {
  try {
    const introPost = await fetchSpecificPost(38);
    renderIntroPost(introPost);
    removeSpinner();

    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

displayPosts();
toggleMenu();
