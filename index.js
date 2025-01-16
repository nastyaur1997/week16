const form = document.forms.registration_form;
const input = document.querySelectorAll(".focus");
const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
const name = document.getElementById("name");
const errorMessage = document.querySelector(".error-message");
const agreeTerms = document.getElementById("agreeTerms");

input.forEach((field) => {
  field.addEventListener("focus", function () {
    field.style.outline = "none";
    field.style.border = "2px solid rgb(193, 38, 38)";
    field.style.borderRadius = "5px";
  });

  field.addEventListener("blur", function () {
    field.style.border = "";
  });
});

function displayError(field, message) {
  const error = field.nextElementSibling;
  if (error) {
    error.textContent = message;
    error.style.color = "red";
    error.style.display = message ? "block" : "none";
  }
}
function validateName() {
  if (!nameRegex.test(name.value)) {
    displayError(name, "Введите корректное имя (только буквы и пробелы).");
  } else {
    displayError(name, "");
  }
}

function toggleSubmitButton() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = !form.checkValidity();
}

input.forEach((field) => field.addEventListener("input", toggleSubmitButton));

agreeTerms.addEventListener("change", function () {
  const submitBtn = document.getElementById("submitBtn");
  const agreeTermsCheckbox = document.getElementById("agreeTerms");
  submitBtn.disabled = !form.checkValidity();
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  checkForm();
});

function checkForm() {
  if (form.checkValidity()) {
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    form.reset();
  } else {
    console.log("Форма содержит некорректные данные.");
  }
}
