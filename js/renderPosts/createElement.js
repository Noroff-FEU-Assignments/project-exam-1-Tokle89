function createElement(tagName, classes, children, text, link, src, alt) {
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

export function createTextContainer(parsedPost, post) {
  const element = createElement("div", ["intro-text"]);

  const paragraph = parsedPost.querySelectorAll("p");

  const title = createElement("h1", undefined, undefined, post.title.rendered);
  const p = createElement("p", undefined, undefined, `Posted: ${post.date}`);
  const secondP = createElement("p", ["shortened-p"], undefined, paragraph[0].innerText);
  const link = createElement("a", ["cta"], undefined, "Read More", `details.html?id=${post.id}`);
  const titleDiv = createElement("div");
  const textDiv = createElement("div", ["text-container"]);

  titleDiv.append(title, p);
  textDiv.append(titleDiv, secondP, link);
  element.append(textDiv);

  return element;
}

export function createImgContainer(parsedPost) {
  const element = createElement("div", ["intro-img_container"]);
  const images = parsedPost.querySelectorAll("img");
  const img = createElement("img", undefined, undefined, undefined, undefined, `${images[0].src}`, `${images[0].alt}`);
  element.append(img);
  return element;
}
