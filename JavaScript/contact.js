const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");

const successMessage = document.querySelector("#contact-success-message");
const contactTitle = document.querySelector("#contact-title");

function validateForm(event){
  event.preventDefault();

  if(checkLength(name.value, 0)=== true){
    nameError.style.display = "none";
  }else{
    nameError.style.display = "block"
  }
  if(validateEmail(email.value, 0)=== true){
    emailError.style.display ="none";
  }else{
    emailError.style.display = "block";
  }
  if(checkLength(subject.value, 0)=== true){
    subjectError.style.display = "none";
    }else{
      subjectError.style.display = "block";
    }
    if(checkLength(message.value, 0) === true){
      messageError.style.display = "none";
    }else{
      messageError.style.display = "block";
    }

    if(name.value && email.value && validateEmail(email.value) && subject.value && message.value){
      successMessage.style.display ="block";
      contactTitle.style.display = "none";
      form.reset();
     
    }
}
  form.addEventListener("submit", validateForm);

  function checkLength(value, len){
    if(value.trim().length > len){
      return true;
    }else{
      return false;
    }
  }
  function validateEmail(email){
    const regEx = /^\S+@\S+\.\S+$/;
    const patterMatches = regEx.test(email);
    return patterMatches;
  }
  