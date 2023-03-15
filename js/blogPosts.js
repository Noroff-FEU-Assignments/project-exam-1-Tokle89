import { fetchSpecificPost } from "./api/apis.js";

fetchSpecificPost(38);

const introContainer = document.querySelector(".intro-container");
introContainer.classList.add("blog-posts_intro-container");
console.log(introContainer);
