const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("form-error");
const errorImg = document.getElementById("error-img");
const outline = document.querySelector(".form__content");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  if (emailInput.value === "") {
    emailError.textContent = "Please provide a valid email";
    emailError.style.display = "block";
    errorImg.style.visibility = "visible";
    outline.classList.add("error-line");
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Please provide a valid email";
    emailError.style.display = "block";
    errorImg.style.display = "block";
    outline.classList.add("error-line");
  } else {
    alert("Thank you");
    emailError.style.display = "none";
    errorImg.style.display = "none";
    emailInput.value = "";
    outline.classList.remove("error-line");
  }
});
