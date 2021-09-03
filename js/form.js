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
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
  event.preventDefault();

  let nameValid = valName(form.elements["name"]);
  let emailValid = valEmail(form.elements["email"]);
  let messageValid = valMessage(form.elements["message"]);

  if (nameValid && emailValid && messageValid) {
    alert("Demo only. No form was posted.");
  }
});