import { adListController } from "./ad-list/adListController.js";
import { navbarController } from "./navbar/navbarController.js";
import { notificationController } from "./notifications/notificationController.js";
import { paginationButton } from "./pagination-buttons/paginationBottonController.js";

const notificationElement = document.querySelector(".notifications");
const paginationButtonElement = document.querySelector(".pagination")
const navbarElement = document.querySelector(".navbar")

//const showMessage = notificationController(notificationElement);

notificationController(notificationElement)
navbarController(navbarElement)
paginationButton(paginationButtonElement)

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