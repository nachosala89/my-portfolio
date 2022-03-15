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

function removeMenu() {
  if (nav.classList.contains('sm-view')) {
    switchMenu();
  }
}

const menuList = document.querySelectorAll('nav li');

button.addEventListener('click', switchMenu);

for (let i = 0; i < menuList.length; i += 1) {
  menuList[i].addEventListener('click', removeMenu);
}

const works = [
  {
    id: 0,
    name: 'The Crypto Cave',
    description: "Website to display some data about the most important cryptocurrencies in real time.",
    fullDescription: "Website to display some data about the most important cryptocurrencies in real time. The data is consumed from the API https://docs.coincap.io/. The currencies can be filter by the price change in the last 24 hours or by position in the ranking. The design was based on this template.",
    image: {
      src: './images/screenshot-crypto.png',
      alt: 'Project image',
    },
    technologies: ['css', 'html', 'javascript'],
    linkLive: 'https://thecryptocave.netlify.app/',
    linkSource: 'https://github.com/nachosala89/cryptocurrencies',
  },
  {
    id: 1,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 2,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 4,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 6,
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: {
      src: './images/project-image.png',
      alt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
];

const multipost = document.querySelector('#multipost');
const img = document.createElement('img');
img.setAttribute('src', works[0].image.src);
img.setAttribute('alt', works[0].image.alt);
multipost.appendChild(img);

const divText = document.createElement('div');
divText.setAttribute('id', 'multipost-text');
divText.classList.add('flex-column');
multipost.appendChild(divText);

function addMainContent(container, work) {
  const title = document.createElement('h3');
  title.textContent = work.name;
  container.appendChild(title);

  const p = document.createElement('p');
  p.textContent = work.description;
  container.appendChild(p);

  const ul = document.createElement('ul');
  ul.classList.add('flex-row');

  work.technologies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

function addButton(container, work) {
  const newButton = document.createElement('button');
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('id', `btn-${work.id}`);
  newButton.textContent = 'See Project';
  container.appendChild(newButton);
}

addMainContent(divText, works[0]);
addButton(divText, works[0]);

const grid = document.querySelector('#works-grid');

for (let i = 1; i <= 6; i += 1) {
  const article = document.createElement('article');
  article.classList.add('flex-column');
  addMainContent(article, works[i]);
  addButton(article, works[i]);

  grid.appendChild(article);
}

function closePopup(popup) {
  popup.remove();
}

function displayProject(works, i) {
  const article = document.createElement('article');
  article.classList.add('work-popup');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.appendChild(article);

  const title = document.createElement('h3');
  title.textContent = works[i].name;
  article.appendChild(title);

  const cancel = document.createElement('img');
  cancel.setAttribute('src', './images/cancel.png');
  cancel.setAttribute('alt', 'Close Popup');
  cancel.setAttribute('id', 'close-popup');
  cancel.addEventListener('click', () => { closePopup(modal); });
  article.appendChild(cancel);

  const ul = document.createElement('ul');
  ul.classList.add('flex-row');

  works[i].technologies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  article.appendChild(ul);

  const outerDiv = document.createElement('div');
  outerDiv.classList.add('flex-column');
  outerDiv.setAttribute('id', 'outer-div');

  const img = document.createElement('img');
  img.setAttribute('src', works[i].image.src);
  img.setAttribute('alt', works[i].image.alt);
  outerDiv.appendChild(img);

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('flex-column');
  innerDiv.setAttribute('id', 'inner-div');
  const p = document.createElement('p');
  p.textContent = works[i].fullDescription;
  innerDiv.appendChild(p);

  const buttons = document.createElement('div');
  buttons.classList.add('flex-row');
  buttons.setAttribute('id', 'popup-buttons');
  const liveButton = document.createElement('button');
  liveButton.setAttribute('type', 'button');
  liveButton.setAttribute('id', `btn-${i}`);
  liveButton.textContent = 'See Live';
  const img1 = document.createElement('img');
  img1.setAttribute('src', './images/live-icon.png');
  img1.setAttribute('alt', 'See live');
  liveButton.appendChild(img1);
  buttons.appendChild(liveButton);

  const sourceButton = document.createElement('button');
  sourceButton.setAttribute('type', 'button');
  sourceButton.setAttribute('id', `btn-${i}`);
  sourceButton.textContent = 'See Source';
  const img2 = document.createElement('img');
  img2.setAttribute('src', './images/source-icon.png');
  img2.setAttribute('alt', 'See Source');
  sourceButton.appendChild(img2);
  buttons.appendChild(sourceButton);
  innerDiv.appendChild(buttons);
  outerDiv.appendChild(innerDiv);
  article.appendChild(outerDiv);

  const body = document.querySelector('body');
  body.appendChild(modal);
}

const workButtons = document.querySelectorAll('#works button');
for (let i = 0; i < workButtons.length; i += 1) {
  workButtons[i].addEventListener('click', () => { displayProject(works, i); });
}
