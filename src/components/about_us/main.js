import about from '../../images/about.jpg';
import awardImg from '../../images/michelin.svg'

function main() {
  const fragment = document.createDocumentFragment();
  const aboutContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const awardContainer = document.createElement('div')
  const aboutText = document.createElement('p');
  const aboutAward1 = document.createElement('img');
  const aboutAward2 = document.createElement('img');
  const awardImgContainer = document.createElement('div');
  const aboutAwardText = document.createElement('p');

  aboutContainer.classList.add('about-container');
  imgContainer.classList.add('img-container');
  awardContainer.classList.add('award-container');
  aboutText.classList.add('about-container__text');
  aboutAward1.classList.add('about-container__award-img');
  aboutAward2.classList.add('about-container__award-img');
  aboutAwardText.classList.add('about-container__award-text');  

  aboutText.innerText = `Since 1948, when a kind and humble grandmother started sharing her food around the neighborhood, an idea was born. To bring the homemade flavor to the whole country, in order to offer a warm and welcoming experience to anyone who wanted to enjoy it. Since then, this house has worked hard to keep this dream in the palate of each person, offering one of the warmest and most exquisite experiences.`;
  aboutAwardText.innerText = "We are proud to mention that in 1990, we were awarded our first Michelin star. Not content, 7 years later in 1997 we got our second michelin star and since then we have worked to maintain the same quality for each of our guests."
  aboutAward1.setAttribute('src', awardImg);
  aboutAward2.setAttribute('src', awardImg);
  
  awardImgContainer.appendChild(aboutAward1);
  awardImgContainer.appendChild(aboutAward2);
  awardContainer.appendChild(awardImgContainer);
  awardContainer.appendChild(aboutAwardText);
  fragment.appendChild(imgContainer);
  fragment.appendChild(aboutText);
  fragment.appendChild(awardContainer);
  aboutContainer.appendChild(fragment);

  return aboutContainer;
}

export {main};