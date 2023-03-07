import { fetchSpecificPost } from "./api/apis.js";

fetchSpecificPost(5);

// function parsePost(post) {
//   const parser = new DOMParser();
//   const parsedPost = parser.parseFromString(post.content.rendered, `text/html`);
//   console.log(parsedPost);
//   const text = parsedPost.querySelectorAll("p");
//   console.log(text);
// }

const hamburger = document.querySelector(".hamburger-btn");
const nav = document.querySelector("nav");
console.log(nav);

function toggleMenu() {
  hamburger.onclick = function () {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
      console.log("working");
    } else {
      nav.classList.add("show-menu");
      console.log("hello");
    }
  };
}

toggleMenu();
