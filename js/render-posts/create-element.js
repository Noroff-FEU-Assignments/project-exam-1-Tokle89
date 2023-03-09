import { parseDate } from "./parse-posts.js";

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
