const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

export function toggleMenu() {
  hamburger.onclick = function () {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
      nav.style.display = "none";
    } else {
      nav.classList.add("show-menu");
      nav.style.display = "block";
    }
  };
}
