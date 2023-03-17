const cardsContainer = document.querySelector(".cards-container");

export function slider() {
  const leftBtn = document.querySelector(".left_circle-btn");
  const rightBtn = document.querySelector(".right_circle-btn");
  const cards = document.querySelectorAll(".card");
  const firstCard = cards[0];
  let firstImgWidth = firstCard.clientWidth + 50;

  leftBtn.addEventListener("click", function () {
    cardsContainer.scrollLeft -= firstImgWidth;
  });

  rightBtn.addEventListener("click", function () {
    cardsContainer.scrollLeft += firstImgWidth;
  });

  // function toggleBtn() {
  //   console.log(cardsContainer.scrollWidth);
  // }
}
export function viewMore() {
  const btn = document.querySelector(".latest-posts_btn");

  btn.addEventListener("click", function () {
    console.log("working");
    cardsContainer.style.maxHeight = "none";
    btn.style.display = "none";
  });
}
