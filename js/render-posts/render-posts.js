import { parsePost } from "./parse-posts.js";
import { createElement } from "./create-element.js";
import { createImgContainer } from "./create-element.js";
import { createTextContainer } from "./create-element.js";
import { createCard } from "./create-element.js";
import { createCircleButton } from "./create-element.js";

const postContainer = document.querySelector(".intro-container");
const latestPosts = document.querySelector(".latest-posts");
const cardsContainer = document.querySelector(".cards-container");

export function renderPost(post) {
  const parsedPost = parsePost(post);
  const textContainer = createTextContainer(parsedPost, post, "h1");
  const imgContainer = createImgContainer(parsedPost, "intro-img_container");

  postContainer.append(imgContainer, textContainer);
}

export function renderCardPosts(posts) {
  posts.forEach(renderCardPost);
  const heading = createElement("h2", undefined, undefined, "View our latest post`s:");
  const leftButton = createCircleButton("left");
  const rightButton = createCircleButton("right");
  const viewBtn = createElement("button", ["btn", "latest-posts_btn"], undefined, "View More");
  latestPosts.append(heading, rightButton, leftButton, viewBtn);
}

function renderCardPost(post) {
  const parsedPost = parsePost(post);
  const card = createCard(parsedPost, post);
  cardsContainer.append(card);
}
