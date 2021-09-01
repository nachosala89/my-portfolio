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
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
}

function addButton(container, work) {
  let newButton = document.createElement('button');
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('id', `btn-${work.id}`);
  newButton.textContent = 'See Project';
  container.appendChild(newButton);
}

addMainContent(divText, mainWork);
addButton(divText, mainWork);

const grid = document.querySelector('#works-grid');

let works = [];
works.push(mainWork);

for (let i = 1; i <= 6; i+= 1) {
  let work = {
    id: i,
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
  };
  works.push(work);

  let article = document.createElement('article');
  article.classList.add('flex-column');
  addMainContent(article, work);
  addButton(article, work);
  
  grid.appendChild(article);
}

function closePopup(article) {
  article.classList.remove('work-popup');
}

function displayProject(works, i) {
  let article = document.createElement('article');
  article.classList.add('work-popup');
  
  let title = document.createElement('h3');
  title.textContent = works[i].name;
  article.appendChild(title);

  let cancel = document.createElement('img');
  cancel.setAttribute('src', './images/cancel.png');
  cancel.setAttribute('alt', 'Close Popup');
  cancel.setAttribute('id', 'close-popup');
  cancel.addEventListener('click', function(){closePopup(article)});
  article.appendChild(cancel);

  let ul = document.createElement('ul');
  ul.classList.add('flex-row');

  works[i].technologies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  article.appendChild(ul);

  const outerDiv = document.createElement('div');
  outerDiv.classList.add('flex-column');
  outerDiv.setAttribute('id', 'outer-div');

  let img = document.createElement('img');
  img.setAttribute('src', works[i].image.src);
  img.setAttribute('alt', works[i].image.alt);
  outerDiv.appendChild(img);
  
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('flex-column');
  innerDiv.setAttribute('id', 'inner-div');
  let p = document.createElement('p');
  p.textContent = works[i].fullDescription;
  innerDiv.appendChild(p);

  const buttons = document.createElement('div');
  buttons.classList.add('flex-row');
  buttons.setAttribute('id', 'popup-buttons');
  let liveButton = document.createElement('button');
  liveButton.setAttribute('type', 'button');
  liveButton.setAttribute('id', `btn-${i}`);
  liveButton.textContent = 'See Live';
  let img1 = document.createElement('img');
  img1.setAttribute('src', './images/live-icon.png');
  img1.setAttribute('alt', 'See live');
  liveButton.appendChild(img1);
  buttons.appendChild(liveButton);
  
  let sourceButton = document.createElement('button');
  sourceButton.setAttribute('type', 'button');
  sourceButton.setAttribute('id', `btn-${i}`);
  sourceButton.textContent = 'See Source';
  let img2 = document.createElement('img');
  img2.setAttribute('src', './images/source-icon.png');
  img2.setAttribute('alt', 'See Source');
  sourceButton.appendChild(img2);
  buttons.appendChild(sourceButton);
  innerDiv.appendChild(buttons);
  outerDiv.appendChild(innerDiv);
  article.appendChild(outerDiv);

  const body = document.querySelector('body');
  body.appendChild(article);
}

const workButtons = document.querySelectorAll('#works button');
for (let i = 0; i < workButtons.length; i += 1) {
  workButtons[i].addEventListener('click', function(){displayProject(works, i)});
}
