import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { removeSpinner } from "./functions/removeSpinner.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { displayErrorMsg } from "./functions/displayMessage.js";

toggleMenu();

const displayPosts = async () => {
  try {
    const introPost = await fetchDetailedPost(5);
    removeSpinner();
    renderIntroPost(introPost);
    const latestPosts = await fetchPosts();
    renderCardPosts(latestPosts);
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

displayPosts();
