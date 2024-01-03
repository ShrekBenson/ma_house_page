import { menuPage } from "../menu/_menu-page";

function mainContent(){
  const mainParagraph = document.createElement('p');
  const mainContainer = document.createElement('div');
  const mainButton = document.createElement('button');
  mainParagraph.innerText = `Since 1948 when a kind and humble grandmother started sharing
    her food around the neighborhood, an idea emerged. 
    To bring the homemade taste all over the country,
    in order to offer a warm and friendly experience
    to anyone who would like to enjoy it.
  `;
  mainButton.innerText = ' See our menu in just one click!'
  mainContainer.classList.add('main-container');
  mainParagraph.classList.add('main-container__pgh');
  mainButton.classList.add('main-container__button');

  mainButton.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = "";
    menuPage();
  })

  mainContainer.appendChild(mainParagraph);
  mainContainer.appendChild(mainButton);

  return mainContainer;
}

export {mainContent}