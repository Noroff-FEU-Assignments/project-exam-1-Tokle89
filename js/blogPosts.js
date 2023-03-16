import { fetchSpecificPost } from "./api/apis.js";
import { fetchPosts } from "./api/apis.js";
import { toggleMenu } from "./functions/toggle-menu.js";
const introContainer = document.querySelector(".intro-container");

fetchSpecificPost(38);
toggleMenu();
fetchPosts("posts");

introContainer.classList.add("blog-posts_intro-container");
