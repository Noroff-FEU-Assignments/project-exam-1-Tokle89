import { parsePost } from "./parse-posts.js";
import { createImgContainer } from "./create-element.js";
import { createTextContainer } from "./create-element.js";

const postContainer = document.querySelector(".intro-container");

export function renderPost(post) {
  const parsedPost = parsePost(post);
  const textContainer = createTextContainer(parsedPost, post);
  const imgContainer = createImgContainer(parsedPost);

  postContainer.append(imgContainer, textContainer);
}

export function renderCardPosts(posts) {
  posts.forEach(renderCardPost);
}

function renderCardPost(post) {
  console.log(post);
  const parsedPost = parsePost(post);
  console.log(parsedPost);
}
