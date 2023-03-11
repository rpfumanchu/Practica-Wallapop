import { adListController } from "./ad-list/adListController.js";
import { notificationController } from "./notifications/notificationController.js";
import { userActtionsController } from "./user-actions/userActionsController.js";

const notificationElement = document.querySelector(".notifications");
const adListElement = document.querySelector(".adGrid");
const userActionsElement = document.querySelector(".user-actions")

//const showMessage = notificationController(notificationElement);
adListController(adListElement);
notificationController(notificationElement)
userActtionsController(userActionsElement)


// adListElement.addEventListener('newNotification', (event) => {
//   console.log('He recibido el evento!!!! ', event.detail.message);
//   showMessage(event.detail.message)
// })