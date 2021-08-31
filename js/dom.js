const button = document.querySelector('#hamburger-icon');
const nav = document.querySelector('nav');

function switchMenu() {
  nav.classList.toggle('sm-view');
  const image = document.querySelector('img');
  if (image.getAttribute('src') === './images/menu.png') {
    image.setAttribute('src', './images/cancel.png');
  } else {
    image.setAttribute('src', './images/menu.png');
  }
}

const menuList = document.querySelectorAll('nav li');

button.addEventListener('click', switchMenu);
for (let i = 0; i < menuList.length; i += 1) {
  menuList[i].addEventListener('click', switchMenu);
}

const mainWork = {
  id: 0,
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: {
    src: './images/multipost.png',
    alt: 'Project image',
  },
  technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  linkLive: '#',
  linkSource: '#',
}

const multipost = document.querySelector('#multipost');
let img = document.createElement('img');
img.setAttribute('src', mainWork.image.src);
img.setAttribute('alt', mainWork.image.alt);
multipost.appendChild(img);

const divText = document.createElement('div');
divText.setAttribute('id', 'multipost-text');
divText.classList.add('flex-column');
multipost.appendChild(divText);

function addMainContent(container, work) {
  let title = document.createElement('h3');
  title.textContent = work.name;
  container.appendChild(title);

  let p = document.createElement('p');
  p.textContent = work.description;
  container.appendChild(p);

  let ul = document.createElement('ul');
  ul.classList.add('flex-row');

  work.technologies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  container.appendChild(ul);

  let newButton = document.createElement('button');
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('id', `btn-${work.id}`);
  newButton.textContent = 'See Proyect';
  container.appendChild(newButton);
}
addMainContent(divText, mainWork);

const grid = document.querySelector('#works-grid');

let works = [];
works.push(mainWork);

for (let i = 1; i <= 6; i+= 1) {
  let work = {
    id: i,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: {
      src: './images/multipost.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  };
  works.push(work);

  let article = document.createElement('article');
  article.classList.add('flex-column');
  addMainContent(article, work);
  
  grid.appendChild(article);
}

function displayProject(i) {
  
}

const workButtons = document.querySelectorAll('#works button');
for (let i = 0; i < workButtons.length; i += 1) {
  menuList[i].addEventListener('click', displayProject(i));
}
