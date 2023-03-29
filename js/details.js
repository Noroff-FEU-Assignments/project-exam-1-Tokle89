import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

toggleMenu();

fetchDetailedPost(id)
  .then((post) => renderPost(post))
  .then(console.log("working"));

fetchPosts()
  .then((posts) => renderCardPosts(posts))
  .catch((error) => console.error(error));
