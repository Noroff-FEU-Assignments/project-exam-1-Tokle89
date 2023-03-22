import { fetchIntroPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";

fetchIntroPost(5);
fetchPosts("cardPosts");

toggleMenu();
