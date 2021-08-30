const button = document.querySelector('#hamburger-icon');

function displayMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sm-view');
  const image = document.querySelector('svg');
}

button.addEventListener('click', displayMenu);
