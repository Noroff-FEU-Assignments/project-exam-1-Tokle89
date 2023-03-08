const hamburger = document.querySelector(".hamburger-btn");
const nav = document.querySelector("nav");
console.log(nav);

export function toggleMenu() {
  hamburger.onclick = function () {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
      console.log("working");
    } else {
      nav.classList.add("show-menu");
      console.log("hello");
    }
  };
}
