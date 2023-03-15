import { adListController } from "./ad-list/adListController.js";
import { titleController } from "./title/titleController.js";
import { footerController } from "./footer/footerController.js";
import { navbarController } from "./navbar/navbarController.js";
import { notificationController } from "./notifications/notificationController.js";
import { paginationButton } from "./pagination-buttons/paginationBottonController.js";
import {spinnerController, hideSpinner} from "./spinner/spinnerController.js"


const spinnerElement = document.querySelector("#spinner");
const notificationElement = document.querySelector(".notifications");
const paginationButtonElement = document.querySelector(".pagination")
const navbarElement = document.querySelector(".navbar")
const titleElement =document.querySelector("#title")
const footerElement = document.querySelector("#footer")

//const showMessage = notificationController(notificationElement);
spinnerController(spinnerElement)
hideSpinner(spinnerElement)
notificationController(notificationElement)
navbarController(navbarElement)
titleController(titleElement)
paginationButton(paginationButtonElement)
footerController(footerElement)

const params = new URLSearchParams(window.location.search);
const page = parseInt(params.get("page")) || 1;

if (!page) {
  window.location = "/"
} else {
  const adListElement = document.querySelector(".adGrid");
  adListController(adListElement, page);

}







// adListElement.addEventListener('newNotification', (event) => {
//   console.log('He recibido el evento!!!! ', event.detail.message);
//   showMessage(event.detail.message)
// })