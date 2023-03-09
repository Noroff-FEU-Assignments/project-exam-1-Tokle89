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
    slider();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function slider() {
  const leftBtn = document.querySelector(".left_circle-btn");
  const rightBtn = document.querySelector(".right_circle-btn");
  const cardsContainer = document.querySelector(".cards-container");
  const cards = document.querySelectorAll(".card");
  const firstcard = cards[0];
  console.log(firstcard);

  let firstImgWidth = firstcard.clientWidth + 50;

  leftBtn.addEventListener("click", function () {
    cardsContainer.scrollLeft -= firstImgWidth;
  });

  rightBtn.addEventListener("click", function () {
    cardsContainer.scrollLeft += firstImgWidth;
  });

  // if (cardsContainer.scrollLeft == 0) {
  //   leftBtn.style.display = "none";
  // } else {
  //   leftBtn.style.display = "block";
  // }

  // if (cardsContainer.scrollLeft == 100) {
  //   rightBtn.style.display = "none";
  // } else {
  //   rightBtn.style.display = "block";
  // }
}
