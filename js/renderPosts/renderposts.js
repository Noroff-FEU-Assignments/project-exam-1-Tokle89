import { createImgContainer } from "./createElement.js";
import { createTextContainer } from "./createElement.js";

const postContainer = document.querySelector(".intro-container");
export function renderPost(parsedPost, post) {
  const textContainer = createTextContainer(parsedPost, post);
  const imgContainer = createImgContainer(parsedPost);

  postContainer.append(imgContainer, textContainer);
}
