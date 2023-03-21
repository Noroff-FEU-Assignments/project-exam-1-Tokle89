const cardsContainer = document.querySelector(".cards-container");

export function slider() {
  const leftBtn = document.querySelector(".left_circle-btn");
  const rightBtn = document.querySelector(".right_circle-btn");
  const cards = document.querySelectorAll(".card");
  const firstCard = cards[0];

  const checkWidth = (direction) => {
    let firstImgWidth = firstCard.clientWidth + 50;
    if (direction === "left") {
      cardsContainer.scrollLeft -= firstImgWidth;
    }
    if (direction === "right") {
      cardsContainer.scrollLeft += firstImgWidth;
    }
  };

  leftBtn.addEventListener("click", function () {
    checkWidth("left");
  });

  rightBtn.addEventListener("click", function () {
    checkWidth("right");
  });
}
export function viewMore() {
  const btn = document.querySelector(".latest-posts_btn");

  btn.addEventListener("click", function () {
    console.log("working");
    cardsContainer.style.maxHeight = "none";
    btn.style.display = "none";
  });
}
