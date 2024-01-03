import { navegationBar } from "../home_page/header";
import { main } from "./main";

function aboutUs() {
  document.querySelector('#content').appendChild(navegationBar());
  document.querySelector('#content').appendChild(main());
}

export {aboutUs};