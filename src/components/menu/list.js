import { menuImages, titleItems, textItems, priceItems } from "./content-menu.js";

function list() {
  const containerMenu = document.createElement('div');
  const menu = document.createElement('ul');
  for(let i = 0; i < 6; i++){
    const fragment = document.createDocumentFragment();
    const listImg = document.createElement('img');
    const listItem = document.createElement('li');
    const listDesc = document.createElement('div');
    const listTitle = document.createElement('h2');
    const listText = document.createElement('p');
    const listPrice = document.createElement('p');
     
    listTitle.innerText = titleItems[i];
    listText.innerText = textItems[i];
    listPrice.innerText = priceItems[i]
    listImg.setAttribute('src', menuImages[i]);

    listDesc.appendChild(listTitle);
    listDesc.appendChild(listText);
    listDesc.appendChild(listPrice);
    fragment.appendChild(listImg);
    fragment.appendChild(listDesc);   
    
    listItem.classList.add('list-container__item');
    listDesc.classList.add('list-container__description');
    listPrice.classList.add('list-container__price');
    listItem.appendChild(fragment);

    menu.appendChild(listItem);
  }
  
  containerMenu.classList.add('list-container');
  menu.classList.add('list-container__list');

  containerMenu.appendChild(menu)

  return containerMenu;
}

export {list};