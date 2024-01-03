import { navegationBar } from "../home_page/header";
import { list } from "./list";

function menuPage() {  
  document.querySelector('#content').appendChild(navegationBar());
  document.querySelector('#content').appendChild(list());
}

export {menuPage};