const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");

const successMessage = document.querySelector("#contact-success-message");
const contactTitle = document.querySelector("#contact-title");

function validateForm(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue.length >= 5) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(emailValue)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (subjectValue.length >= 15) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (messageValue.length >= 24) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    nameValue.length >= 4 &&
    validateEmail(emailValue) &&
    subjectValue.length >= 15 &&
    messageValue.length >= 24
  ) {
    
    successMessage.style.display = "block";
    contactTitle.style.display = "none";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const regEx = /^\S+@\S+\.\S+$/;
  return regEx.test(email);
}
