import { footerController } from "../footer/footerController.js"
import { navbarController } from "../navbar/navbarController.js"
import { notificationController } from "../notifications/notificationController.js"
import { spinnerController } from "../spinner/spinnerController.js"
import { titleController } from "../title/titleController.js"
import { loginController } from "./loginController.js"

const spinnerElement = document.querySelector("#spinner")
const navbarElement = document.querySelector(".navbar")
const notificationsElement = document.querySelector('.notifications')
const loginElement = document.querySelector("#logUser")
const titleElement = document.querySelector("#title")
const footerElement = document.querySelector("#footer")


spinnerController(spinnerElement)
navbarController(navbarElement)
titleController(titleElement)
notificationController(notificationsElement)
loginController(loginElement, spinnerElement)
footerController(footerElement)
