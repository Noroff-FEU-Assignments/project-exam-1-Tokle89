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
  posts.forEach((post, i) => {
    if (post.id !== 38 && post.id !== 82) {
      const postsContainer = document.querySelector(".blog-posts_container");
      const parsedPost = parsePost(posts[i]);
      const post = createPostContainer(parsedPost, posts[i]);

      let num = i + 1;
      post.id = `${num}`;

      if (i == 5 || i == 6 || i == 11 || i == 13) {
        post.classList.add("flex-post");
      }
      if (post.id > 11) {
        post.style.display = "none";
      }

      postsContainer.append(post);
    }
  });
};

export function createDetailedPost(parsedPost) {
  const element = createElement("div", ["detailed-post"]);
  const h2 = parsedPost.querySelector("h2");
  const h3 = parsedPost.querySelector("h3");
  const h4 = parsedPost.querySelector("h4");
  const paragraphs = parsedPost.querySelectorAll("p");
  const images = parsedPost.querySelectorAll("img");

  const container = createElement("div");
  const contentContainer1 = createElement("div", ["content-container"]);
  const contentContainer2 = createElement("div", ["content-container"]);

  paragraphs.forEach((p, i) => {
    if (i === 0 && h3) {
      const div = createElement("div", undefined, [h3, p]);
      contentContainer1.append(div);
    } else if (i === 0) {
      contentContainer1.append(p);
    }
    if (i === 1 && h4) {
      const div = createElement("div", undefined, [h4, p]);
      contentContainer2.append(div);
    } else if (i === 1) {
      contentContainer2.append(p);
    }
  });

  images.forEach((image, i) => {
    const img = createElement("img", undefined, undefined, undefined, undefined, `${image.src}`, `${image.alt}`);

    img.addEventListener("click", function () {
      createModal(img.src, img.alt);
    });

    if (i === 0) {
      contentContainer1.append(img);
    }
    if (i === 1) {
      contentContainer2.append(img);
    }
  });

  container.append(contentContainer1);

  if (contentContainer2.children.length > 0) {
    container.append(contentContainer2);
  }

  const btn1 = createElement("a", ["btn"], undefined, "Home", "index.html");
  const btn2 = createElement("a", ["btn"], undefined, "Blog Post`s", "blog-posts.html");
  const btnContainer = createElement("div", ["btn-container"]);
  btnContainer.append(btn1, btn2);

  element.append(h2, container, btnContainer);

  return element;
}
export function createHeading(post) {
  const element = createElement("div", ["heading-container"]);
  const title = createElement("h1", undefined, undefined, post.title.rendered);
  const date = parseDate(post);
  const p = createElement("p", undefined, undefined, `Posted: ${date}`);
  element.append(title, p);
  return element;
}

export function createModal(src, alt) {
  const img = createElement("img", ["modal-img"], undefined, undefined, undefined, `${src}`, `${alt}`);
  const modal = createElement("div", ["modal"], [img]);
  const main = document.querySelector("main");
  main.append(modal, img);

  modal.addEventListener("click", function () {
    modal.remove();
    img.remove();
  });
}

export function createComment(comment) {
  const element = createElement("div", ["comment"]);
  const date = parseDate(comment);
  const parsedComment = parsePost(comment);

  const heading = createElement("h2", undefined, undefined, `${comment.author_name}`);
  const p = createElement("p", undefined, undefined, `${date}`);
  const div = createElement("div", undefined, [heading, p]);
  const secondP = parsedComment.querySelector("p");

  element.append(div, secondP);
  return element;
}

export function createCommentMsg() {
  const element = createElement("div");
  const heading = createElement("h2", undefined, undefined, "No comments has been posted yet.");
  element.append(heading);

  return element;
}
