import { fetchSpecificPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";

fetchSpecificPost(5);
fetchPosts("cardPosts");

toggleMenu();
