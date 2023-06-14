const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const contactInput = document.getElementById('contact');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const passwordInput = document.getElementById('password');
const popup = document.getElementById("popup");

function openPopup() {
  if (validateInputs()) {
    popup.classList.add("open-popup");
  }
}

function closePopup() {
  popup.classList.remove("open-popup");
  resetForm();
}

function resetForm() {
  contactForm.reset();
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = nameInput.value.trim();
  const surnameValue = surnameInput.value.trim();
  const contactValue = contactInput.value.trim(); 
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  let isValid = true;

  if (nameValue === '') {
    setError(nameInput, 'Name is required');
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  if (surnameValue === '') {
    setError(surnameInput, 'Surname is required');
    isValid = false;
  } else {
    setSuccess(surnameInput);
  }

  if (contactValue === '') {
    setError(contactInput, 'Contact number is required');
    isValid = false;
  } else if (contactValue.length < 10) {
    setError(contactInput, 'Contact number must be at least 10 characters');
    isValid = false;
  } else {
    setSuccess(contactInput);
  }

  if (emailValue === '') {
    setError(emailInput, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, 'Please provide a valid email address');
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  if (messageValue === '') {
    setError(messageInput, 'Message is required');
    isValid = false;
  } else if (messageValue.length < 10) {
    setError(messageInput, 'Message must be at least 10 characters');
    isValid = false;
  } else {
    setSuccess(messageInput);
  }

  if (passwordValue === '') {
    setError(passwordInput, 'Password is required');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(passwordInput, 'Password must be at least 8 characters');
    isValid = false;
  } else {
    setSuccess(passwordInput);
  }

  return isValid;
};
