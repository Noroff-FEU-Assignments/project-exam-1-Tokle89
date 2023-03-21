import { renderIntroPost } from "../render-posts/render-posts.js";
import { renderCardPosts } from "../render-posts/render-posts.js";
import { slider } from "../functions/postsSlider.js";
import { viewMore } from "../functions/postsSlider.js";
import { renderPosts } from "../render-posts/render-posts.js";

const baseUrl = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/posts/";
const embeded = `?_embeded`;
const url = baseUrl + embeded + `&per_page=50`;

export async function fetchSpecificPost(id) {
  try {
    const specificUrl = baseUrl + id + embeded;
    const response = await fetch(specificUrl);
    const result = await response.json();
    renderIntroPost(result);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPosts(typeOfPosts) {
  try {
    const respone = await fetch(url);
    const result = await respone.json();

    if (typeOfPosts === "cardPosts") {
      renderCardPosts(result);
      slider();
      viewMore();
    } else {
      renderPosts(result);
    }

    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}