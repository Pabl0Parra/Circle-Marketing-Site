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
