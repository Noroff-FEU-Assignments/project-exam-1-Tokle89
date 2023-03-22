import { fetchIntroPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
const introContainer = document.querySelector(".intro-container");

fetchIntroPost(38);
toggleMenu();
fetchPosts("posts");

introContainer.classList.add("blog-posts_intro-container");
