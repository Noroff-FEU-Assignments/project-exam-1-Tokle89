const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

export function validateForm() {
  fullName.addEventListener("keydown", () => {
    if (checkLength(fullName.value, 3) === true) {
      fullNameError.style.display = "none";
    } else {
      fullNameError.style.display = "block";
    }

    email.addEventListener("keydown", () => {
      if (validateEmail(email.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }
    });

    subject.addEventListener("keydown", () => {
      if (checkLength(subject.value, 13) === true) {
        subjectError.style.display = "none";
      } else {
        subjectError.style.display = "block";
      }
    });

    message.addEventListener("keydown", () => {
      if (checkLength(message.value, 23) === true) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
      }
    });
  });
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(mail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(mail);
  return patternMatches;
}
