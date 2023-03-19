import { notificationController } from "../notifications/notificationController.js";
import { singupController } from "./createUserController.js";
import { navbarController } from "../navbar/navbarController.js";
import { titleController } from "../title/titleController.js";
import { footerController } from "../footer/footerController.js";
import { spinnerController } from "../spinner/spinnerController.js";
spinnerController


const spinnerElement = document.querySelector("#spinner")
const navbarElement = document.querySelector(".navbar")
const createUserElement = document.querySelector("#createUser")
const notificationsElement = document.querySelector('.notifications')
const titleElement = document.querySelector('#title')
const footerElement = document.querySelector('#footer')

spinnerController(spinnerElement)
navbarController(navbarElement)
titleController(titleElement)
notificationController(notificationsElement)
singupController(createUserElement, spinnerElement)
footerController(footerElement)