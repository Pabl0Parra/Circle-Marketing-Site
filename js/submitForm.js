const form = document.getElementById("post_info-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateInputs()) {
    Post();
    resetForm();
  }
});

const resetForm = () => {
  // let element = document.getElementsByClassName("input-control.succes");
  // element.classList.remove("input-control.success");

  let elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    elements[i].value = "";
    elements[i].style.borderColor = "transparent";
    elements[i].style.boxShadow = "none";
  }

  let messageElement = document.getElementById("field");
  messageElement.value = "";
  messageElement.style.borderColor = "transparent";
  messageElement.style.boxShadow = "none";
};

function Post() {
  let new_title = document.getElementById("name").value;
  let new_body = document.getElementById("field").value;
  let userid = document.getElementById("phone").value;

  console.log(`Input Data:  ${userid}   ${new_title}   ${new_body}`);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: new_title,
      body: new_body,
      userId: userid,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`RESPONSE: ${JSON.stringify(data)}`);
    })

    .then(() => {
      // const log = document.getElementById("form-done");
      // log.textContent = ` Thank you! Your submission has been received!`;

      alert(` Thank you! Your submission has been received!`);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Get the input fields
// const form = document.getElementById("form");
const phone = document.getElementById("phone");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const userMessage = document.getElementById("field");

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
  let check = true;

  if (firstNameValue == "") {
    setError(firstName, "First name is required");
    check = false;
  } else if (firstNameValue.length <= 2 || !isValidFirstName(firstNameValue)) {
    setError(firstName, "Please provide a real name");
    check = false;
  } else {
    setSuccess(firstName);
  }

  if (emailValue == "") {
    setError(email, "Email is required");
    check = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email, like john@gmail.com");
    check = false;
  } else {
    setSuccess(email);
  }

  if (phoneValue == "") {
    setError(phone, "Phone number is required");
    check = false;
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, "Please enter a 9 digits phone number");
    check = false;
  } else {
    setSuccess(phone);
  }

  if (userMessageValue == "") {
    setError(userMessage, "Please enter your message");
    check = false;
  } else {
    setSuccess(userMessage);
  }

  return check;
};
