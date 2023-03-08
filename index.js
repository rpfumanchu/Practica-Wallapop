import { adListController } from "./ad-list/adListController.js";
import { notificationController } from "./notifications/notificationController.js";

const notificationElement = document.querySelector(".notifications");
const adListElement = document.querySelector(".adGrid");

//const showMessage = notificationController(notificationElement);
adListController(adListElement);
notificationController(notificationElement)


// adListElement.addEventListener('newNotification', (event) => {
//   console.log('He recibido el evento!!!! ', event.detail.message);
//   showMessage(event.detail.message)
// })