import logoImg from '../../images/logo.svg'
import awardImg from '../../images/michelin.svg'
import { pages } from '../pages';

function navegationBar() {
  const fragmentOpts = document.createDocumentFragment();
  const fragmentBar = document.createDocumentFragment();

  const navBar = document.createElement('div');
  const navLogo = document.createElement('div');
  const logo = document.createElement('img');
  const textLogo = document.createElement('h1');
  const navList = document.createElement('ul');
  const opts = ["Home", "Menu", "About us"];
  opts.forEach((opt, i) => {
    const navOption = document.createElement('li');
    navOption.classList.add('nav-bar__opt');
    navOption.innerText = opt;

    navOption.addEventListener('click', () => {
      document.querySelector('#content').innerHTML = "";
      pages[i]();
    });

    fragmentOpts.appendChild(navOption);
  })

  logo.setAttribute('src', logoImg);
  textLogo.innerText = "Ma's House";

  navBar.classList.add('nav-bar');
  navLogo.classList.add('nav-bar__container-logo');
  logo.classList.add('nav-bar__logo');
  textLogo.classList.add('nav-bar__text-logo');
  navList.classList.add('nav-bar__list');

  navLogo.appendChild(logo);
  navLogo.appendChild(textLogo);
  navList.appendChild(fragmentOpts);
  fragmentBar.appendChild(navLogo);
  fragmentBar.appendChild(navList);

  navBar.appendChild(fragmentBar);

  return navBar;
}
function header() {
  const heroContainer = document.createElement('div');
  const heroText = document.createElement('p');
  const heroAward = document.createElement('div');

  heroContainer.classList.add('hero-container');
  heroText.classList.add('hero-text');
  heroAward.classList.add('hero-award')
  heroText.innerHTML = `
    <br>
    Eat like at grandma's house and enjoy a delightfull meal
    <br>
    from our extensive menu, take a seat and warm yourself at
    <span>Ma's house</span>    
  `
  heroAward.innerHTML = `
    <img src="${awardImg}"></img>
    <p>Awarded with two Michelin stars</p>
  `

  heroContainer.appendChild(navegationBar());
  heroContainer.appendChild(heroText);
  heroContainer.appendChild(heroAward);

  return heroContainer;
}

export {navegationBar, header};