import { parsePost } from "./parse-posts.js";
import { createElement } from "./create-element.js";
import { createImgContainer } from "./create-element.js";
import { createTextContainer } from "./create-element.js";
import { createCard } from "./create-element.js";
import { createCircleButton } from "./create-element.js";
import { createPosts } from "./create-element.js";
import { viewMorePosts } from "../functions/view-more.js";
import { createDetailedPost } from "./create-element.js";
import { createHeading } from "./create-element.js";
import { slider } from "../functions/postsSlider.js";

const introContainer = document.querySelector(".intro-container");
const latestPosts = document.querySelector(".latest-posts");
const cardsContainer = document.querySelector(".cards-container");
const postsContainer = document.querySelector(".blog-posts_container");
const detailedPostContainer = document.querySelector(".detailed-post_container");

export function renderIntroPost(post) {
  const parsedPost = parsePost(post);
  const textContainer = createTextContainer(parsedPost, post, "h1");
  const imgContainer = createImgContainer(parsedPost, "intro-img_container");

  introContainer.append(imgContainer, textContainer);
}

export function renderCardPosts(posts) {
  posts.forEach(renderCardPost);
  const heading = createElement("h2", undefined, undefined, "View our latest post`s:");

  const leftBtn = createCircleButton("left");
  leftBtn.addEventListener("click", () => {
    slider("left");
  });

  const rightBtn = createCircleButton("right");
  rightBtn.addEventListener("click", () => {
    slider("right");
  });

  const viewBtn = createElement("button", ["btn", "latest-posts_btn"], undefined, "View More");
  viewBtn.addEventListener("click", () => {
    cardsContainer.style.maxHeight = "none";
    viewBtn.style.display = "none";
  });

  latestPosts.append(heading, rightBtn, leftBtn, viewBtn);
}

function renderCardPost(post) {
  const parsedPost = parsePost(post);
  const card = createCard(parsedPost, post);
  cardsContainer.append(card);
}

export function renderPosts(posts) {
  createPosts(posts);
  const button = createElement("button", ["btn"], undefined, "View More");
  button.addEventListener("click", viewMorePosts);
  postsContainer.append(button);
}

export function renderPost(post) {
  const parsedPost = parsePost(post);
  const heading = createHeading(post);
  const detailedPost = createDetailedPost(parsedPost);

  const ul = parsedPost.querySelector("ul");

  detailedPostContainer.append(heading, detailedPost);
}
