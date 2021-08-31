const button = document.querySelector('#hamburger-icon');
const nav = document.querySelector('nav');

function switchMenu() {
  nav.classList.toggle('sm-view');
  const image = document.querySelector('img');
  if (image.getAttribute('src') === "./images/menu.png") {
    image.setAttribute('src', './images/cancel.png');
  } else {
    image.setAttribute('src', './images/menu.png')
  }
}

const menuList = document.querySelectorAll('nav li');

button.addEventListener('click', switchMenu);
for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('click', switchMenu);
}
