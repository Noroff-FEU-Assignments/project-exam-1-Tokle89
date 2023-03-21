import { parseDate } from "./parse-posts.js";
import { parsePost } from "./parse-posts.js";
export function createElement(tagName, classes, children, text, link, src, alt) {
  const element = document.createElement(tagName);

  if (Array.isArray(classes) && classes) {
    element.classList.add(...classes);
  }
  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if (text) {
    element.innerText = text;
  }
  if (link) {
    element.href = link;
  }
  if (tagName === "img") {
    element.src = src;
    element.alt = alt;
  }
  return element;
}

export function createTextContainer(parsedPost, post, heading) {
  const element = createElement("div", ["intro-text"]);

  const paragraph = parsedPost.querySelectorAll("p");
  const title = createElement(`${heading}`, undefined, undefined, post.title.rendered);
  const date = parseDate(post);
  const p = createElement("p", undefined, undefined, `Posted: ${date}`);
  const secondP = createElement("p", ["shortened-p"], undefined, paragraph[0].innerText);
  const link = createElement("a", ["cta"], undefined, "Read More", `details.html?id=${post.id}`);
  const titleDiv = createElement("div", undefined, [title, p]);
  const textDiv = createElement("div", ["text-container_text"], [titleDiv, secondP, link]);

  element.append(textDiv);

  return element;
}

export function createImgContainer(parsedPost, className) {
  const element = createElement("div", [className]);
  const images = parsedPost.querySelectorAll("img");
  const img = createElement("img", undefined, undefined, undefined, undefined, `${images[0].src}`, `${images[0].alt}`);
  element.append(img);
  return element;
}
export function createCard(parsedPost, post) {
  const element = createElement("div", ["card"]);
  const images = parsedPost.querySelectorAll("img");
  const img = createElement("img", ["card-img"], undefined, undefined, undefined, `${images[0].src}`, `${images[0].alt}`);
  const text = createTextContainer(parsedPost, post, "h3");
  element.append(img, text);
  return element;
}

export function createCircleButton(direction) {
  const element = createElement("span", ["material-symbols-outlined", "circle-btn"]);

  if (direction === "left") {
    element.innerText = "arrow_circle_left";
    element.classList.add("left_circle-btn");
  } else {
    element.innerText = "arrow_circle_right";
    element.classList.add("right_circle-btn");
  }

  return element;
}

function createPostContainer(parsedPost, post) {
  const element = createElement("div", ["post-container"]);
  const textContainer = createTextContainer(parsedPost, post, "h2");
  const imgContainer = createImgContainer(parsedPost, "img-container");
  element.append(textContainer, imgContainer);
  return element;
}

export const createPosts = (posts) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == 38) {
      continue;
    }
    const postsContainer = document.querySelector(".blog-posts_container");
    const parsedPost = parsePost(posts[i]);
    const post = createPostContainer(parsedPost, posts[i]);

    let num = i + 1;
    post.id = `${num}`;

    if (i == 4 || i == 5 || i == 10 || i == 12) {
      post.classList.add("flex-post");
    }
    if (post.id > 10) {
      post.style.display = "none";
    }

    postsContainer.append(post);
  }
};
