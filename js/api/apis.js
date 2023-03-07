import { renderPost } from "../renderPosts/renderposts.js";

const baseUrl = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/posts/";
const embeded = `?_embeded`;
const url = baseUrl + embeded;

export async function fetchSpecificPost(id) {
  try {
    const specificUrl = baseUrl + id + embeded;
    const response = await fetch(specificUrl);
    const result = await response.json();
    parsePost(result);
  } catch (error) {}
}

function parsePost(post) {
  const parser = new DOMParser();
  const parsedPost = parser.parseFromString(post.content.rendered, `text/html`);
  renderPost(parsedPost);
}
