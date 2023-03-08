import { fetchSpecificPost } from "./api/apis.js";
import { fetchPosts } from "./api/apis.js";
import { toggleMenu } from "./functions/toggle-menu.js";

fetchSpecificPost(5);
fetchPosts();

toggleMenu();
