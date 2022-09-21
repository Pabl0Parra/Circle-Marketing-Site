// Get the input fields
const form = document.getElementById("form");
const phone = document.getElementById("phone");
const firstName = document.getElementById("fName");
const email = document.getElementById("email");
const userMessage = document.getElementById("userMessage");

// pass event to prevent the form from refreshing after submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidFirstName = (firstName) => {
  const firstNameRegEx = /^[a-z ,.'-]+$/;

  return firstNameRegEx.test(String(firstName).toLowerCase());
};

const isValidEmail = (email) => {
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return emailRegEx.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const phoneRegEx = /^\d{9}$/;

  return phoneRegEx.test(phone);
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const userMessageValue = userMessage.value;

  if (firstNameValue == "") {
    setError(firstName, "First name is required");
  } else if (firstNameValue.length <= 2 || !isValidFirstName(firstNameValue)) {
    setError(firstName, "Please provide a real name");
  } else {
    setSuccess(firstName);
  }

  if (emailValue == "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email, like john@gmail.com");
  } else {
    setSuccess(email);
  }

  if (phoneValue == "") {
    setError(phone, "Phone number is required");
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, "Please enter a 9 digits phone number");
  } else {
    setSuccess(phone);
  }

  if (userMessageValue == "") {
    setError(userMessage, "Please enter your message");
  } else {
    setSuccess(userMessage);
  }
};

//pass event argument to "validate()" function to stop form from refreshing after submitting
// function validateInputs(event) {
//   // Validate fields entered by the user: name, phone & email...

//   // Prevents reloading the page when submitting

//   // -- First Name --
//   // Check if name is 3 characters long at least & does not contains numbers or special characters
//   // RegExp "test()" method --> tests for a match in a string, returns true or false
//   if (
//     firstName.value.length < 3 ||
//     /^[a-z ,.'-]+$/i.test(firstName.value) == false
//   ) {
//     // errorName.classList.add("d-block");
//     errorName.classList.add("invalid-feedback");
//     firstName.classList.add("border-danger");
//   }
//   // Hide error message if the above checks have been passed
//   if (
//     firstName.value.length >= 3 &&
//     /^[a-z ,.'-]+$/i.test(firstName.value) == true
//   ) {
//     firstName.classList.remove("border-danger");
//     firstName.classList.add("border-success");
//   }

//   // -- Email --
//   // Check for a valid email format, like name@example.com
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm.test(
//       newEmail.value
//     ) == false
//   ) {
//     // errorEmail.classList.add("d-block");
//     errorEmail.classList.add("invalid-feedback");
//     newEmail.classList.add("border-danger");
//   }
//   // Hide error message if format is valid
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm.test(
//       newEmail.value
//     ) == true
//   ) {
//     // errorEmail.classList.remove("d-block");
//     newEmail.classList.remove("border-danger");
//     newEmail.classList.add("border-success");
//   }

//   // -- Phone --
//   // Checks if it's 9 digits long
//   if (/^\d{9}$/gm.test(newPhone.value) == false) {
//     // errorPhone.classList.add("d-block");
//     errorPhone.classList.add("invalid-feedback");
//     newPhone.classList.add("border-danger");
//   }
//   // Hide error message if the above check has been passed
//   if (/^\d{9}$/gm.test(newPhone.value) == true) {
//     // errorPhone.classList.remove("d-block");
//     newPhone.classList.remove("border-danger");
//     newPhone.classList.add("border-success");
//   }
// }
