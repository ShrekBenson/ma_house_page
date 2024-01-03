import { header } from "./header";
import { mainContent } from "./main";

function homePage() {
  document.querySelector('#content').appendChild(header());
  document.querySelector('#content').appendChild(mainContent());
};

export {homePage};