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
    name: 'Recipes App',
    description: "This app allows the users to manage different types of food and recipes, view other's recipes and generate a shopping list.",
    fullDescription: "This app allows the users to manage different types of food and recipes, view other's recipes and generate a shopping list. Made with Ruby on Rails.",
    image: {
      src: './images/projects/recipes.png',
      alt: 'Project image',
    },
    technologies: ['Bootstrap', 'Ruby on Rails'],
    linkLive: 'https://recipe-app-nacho.herokuapp.com/',
    linkSource: 'https://github.com/nachosala89/recipe-app-rails',
  },
  {
    id: 1,
    name: 'Expobavio',
    description: "Website for a rural exhibition that took place in my town (Bavio, Argentina) every year before Covid.",
    fullDescription: "Website for a rural exhibition that took place in my town (Bavio, Argentina) every year before Covid.",
    image: {
      src: './images/projects/expobavio.png',
      alt: 'Project image',
    },
    technologies: ['Bootstrap', 'JavaScript'],
    linkLive: 'https://nachosala89.github.io/agro-expo/',
    linkSource: 'https://github.com/nachosala89/agro-expo',
  },
  {
    id: 2,
    name: "Space Traveler's Hub",
    description: "In this website we worked with real live data from the SpaceX API. Our task was to build a web app for a company that provides commercial and scientific space travel services.",
    fullDescription: "In this website we worked with real live data from the SpaceX API. Our task was to build a web app for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    image: {
      src: './images/projects/space-travelers.png',
      alt: 'Project image',
    },
    technologies: ['JavaScript', 'Bootstrap', 'React'],
    linkLive: 'https://youthful-lichterman-4505b6.netlify.app/',
    linkSource: 'https://github.com/DyaryRaoof/space-travelers-hub',
  },
  {
    id: 3,
    name: 'The Crypto Cave',
    description: "Website to display some data about the most important cryptocurrencies in real time.",
    fullDescription: "Website to display some data about the most important cryptocurrencies in real time. The data is consumed from the API https://docs.coincap.io/. The currencies can be filter by the price change in the last 24 hours or by position in the ranking. The design was based on this template.",
    image: {
      src: './images/projects/screenshot-crypto.png',
      alt: 'Project image',
    },
    technologies: ['JavaScript', 'React', 'Bootstrap'],
    linkLive: 'https://thecryptocave.netlify.app/',
    linkSource: 'https://github.com/nachosala89/cryptocurrencies',
  },
  {
    id: 4,
    name: 'Breaking Bad Store',
    description: "This app shows the characters of the world-famous series Breaking Bad.",
    fullDescription: "This app shows the characters of the world-famous series Breaking Bad. It consumes two API: One to get the data about the Breaking Bad characters, and another to access and modify the data about comments and likes for the displayed content.",
    image: {
      src: './images/projects/breaking-bad.png',
      alt: 'Project image',
    },
    technologies: ['Bootstrap', 'Javascript'],
    linkLive: 'https://wikitelmex.github.io/kanban-capstone/',
    linkSource: 'https://github.com/nachosala89/breaking-bad-app',
  },
  {
    id: 5,
    name: 'Lodging App',
    description: "This app allows the user to reserve a room in a hotel in an easy way.",
    fullDescription: "This app allows the user to reserve a room in a hotel in an easy way. The API was created with Ruby on Rails and the front-end with React.",
    image: {
      src: './images/projects/lodging.png',
      alt: 'Project image',
    },
    technologies: ['Bootstrap', 'Rails', 'React'],
    linkLive: 'https://goofy-panini-7f9108.netlify.app/',
    linkSource: 'https://github.com/nachosala89/lodging-app-backend',
  },
  {
    id: 6,
    name: 'Leaderboard',
    description: "In this leaderboard the user can dynamically add, remove, and store scores.",
    fullDescription: "In this leaderboard the user can dynamically add, remove, and store scores. I used Webpack to manage the different modules. All data is preserved thanks to the external Leaderboard API service.",
    image: {
      src: './images/projects/leaderboard.png',
      alt: 'Project image',
    },
    technologies: ['JavaScript', 'Webpack'],
    linkLive: 'https://nachosala89.github.io/leaderboard/dist/',
    linkSource: 'https://github.com/nachosala89/leaderboard',
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
  const backImage = document.createElement('div');
  backImage.classList.add('back-img');
  backImage.style.backgroundImage = `url(${works[i].image.src})`;
  const article = document.createElement('article');
  article.classList.add('flex-column');
  addMainContent(article, works[i]);
  addButton(article, works[i]);

  const div = document.createElement('div');
  div.classList.add('article-container');
  div.appendChild(article);
  div.appendChild(backImage);
  grid.appendChild(div);
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
  img.classList.add('popup-img');
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
  const liveLink = document.createElement('a');
  liveLink.setAttribute('href', works[i].linkLive);
  liveLink.appendChild(liveButton);
  buttons.appendChild(liveLink);

  const sourceButton = document.createElement('button');
  sourceButton.setAttribute('type', 'button');
  sourceButton.setAttribute('id', `btn-${i}`);
  sourceButton.textContent = 'See Source';
  const img2 = document.createElement('img');
  img2.setAttribute('src', './images/source-icon.png');
  img2.setAttribute('alt', 'See Source');
  sourceButton.appendChild(img2);
  const sourceLink = document.createElement('a');
  sourceLink.setAttribute('href', works[i].linkSource);
  sourceLink.appendChild(sourceButton);
  buttons.appendChild(sourceLink);
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
