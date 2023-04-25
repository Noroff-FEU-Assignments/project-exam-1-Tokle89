import { toggleMenu } from "./functions/toggle-menu.js";
import { fetchDetailedPost } from "./api/fetch-posts.js";
import { renderAboutPost } from "./render-posts/render-posts.js";

const displayAboutPost = async () => {
  const aboutPost = await fetchDetailedPost(82);
  renderAboutPost(aboutPost);
};

displayAboutPost();
toggleMenu();
