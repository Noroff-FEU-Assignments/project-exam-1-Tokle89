import { renderPost } from "../render-posts/render-posts.js";
import { renderCardPosts } from "../render-posts/render-posts.js";

const baseUrl = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/posts/";
const embeded = `?_embeded`;
const url = baseUrl + embeded;

export async function fetchSpecificPost(id) {
  try {
    const specificUrl = baseUrl + id + embeded;
    const response = await fetch(specificUrl);
    const result = await response.json();
    renderPost(result);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPosts() {
  try {
    const respone = await fetch(url);
    const result = await respone.json();
    renderCardPosts(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
