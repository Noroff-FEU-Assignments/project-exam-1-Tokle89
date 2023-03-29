import { validateForm } from "./functions/validateForm.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { msgReceived } from "./functions/displayMessage.js";
const form = document.querySelector("form");

toggleMenu();
validateForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  msgReceived();
});
