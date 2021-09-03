function showMessage(idError, message) {
  const msg = document.querySelector(`#${idError}`);
  msg.innerText = message;
}

function hasValue(input) {
  return !(input.value.trim() === '');
}

function resetContent(idError) {
  const msg = document.querySelector(`#${idError}`);
  msg.innerText = '';
}

function valName(name) {
  if (!hasValue(name)) {
    showMessage('name-error', 'Please enter your full name');
    return false;
  }
  resetContent('name-error');
  return true;
}

function valEmail(email) {
  if (!hasValue(email)) {
    showMessage('email-error', 'Please enter your email');
    return false;
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lowercaseRegex = /[^A-Z]+@[^A-Z]+/;
  const emailValue = email.value.trim();
  if (!emailRegex.test(emailValue)) {
    showMessage('email-error', 'Please enter a correct email address format');
    return false;
  }
  if (!lowercaseRegex.test(emailValue)) {
    showMessage('email-error', 'The email address must have all letters as lowercase');
    return false;
  }
  resetContent('email-error');
  return true;
}

function valMessage(message) {
  if (!hasValue(message)) {
    showMessage('message-error', 'Please enter your message');
    return false;
  }
  resetContent('message-error');
  return true;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValid = valName(form.elements.name);
  const emailValid = valEmail(form.elements.email);
  const messageValid = valMessage(form.elements.message);

  if (nameValid && emailValid && messageValid) {
    form.submit();
  }
});

const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const messageField = document.querySelector('#message');

function preserveData() {
  const formObject = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem('formObject', JSON.stringify(formObject));
}

nameField.addEventListener('change', preserveData);
emailField.addEventListener('change', preserveData);
messageField.addEventListener('change', preserveData);

if (localStorage.getItem('formObject') !== null) {
  window.addEventListener('load', () => {
    const formObject = JSON.parse(localStorage.getItem('formObject'));
    nameField.value = formObject.name;
    emailField.value = formObject.email;
    messageField.value = formObject.message;
  });
}