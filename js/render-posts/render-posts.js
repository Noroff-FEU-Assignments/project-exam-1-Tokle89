import { parsePost } from "./parse-posts.js";
import { createElement } from "./create-element.js";
import { createImgContainer } from "./create-element.js";
import { createTextContainer } from "./create-element.js";
import { createCard } from "./create-element.js";
import { createCircleButton } from "./create-element.js";
import { createPostContainer } from "./create-element.js";

const introContainer = document.querySelector(".intro-container");
const latestPosts = document.querySelector(".latest-posts");
const cardsContainer = document.querySelector(".cards-container");
const postsContainer = document.querySelector(".blog-posts_container");

export function renderIntroPost(post) {
  const parsedPost = parsePost(post);
  const textContainer = createTextContainer(parsedPost, post, "h1");
  const imgContainer = createImgContainer(parsedPost, "intro-img_container");

  introContainer.append(imgContainer, textContainer);
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

export function renderPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == 38) {
      continue;
    }

    let num = i + 1;
    const parsedPost = parsePost(posts[i]);
    const postContainer = createPostContainer(parsedPost, posts[i]);
    postContainer.classList.add(`post-nr${num}`);

    if (i == 4 || i == 5 || i == 10 || i == 12) {
      postContainer.classList.add("flex-post");
    }

    postsContainer.append(postContainer);
  }
}
