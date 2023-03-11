import { navbarController } from "../navbar/navbarController.js"
import { notificationController } from "../notifications/notificationController.js"
import { loginController } from "./loginController.js"

const navbarElement = document.querySelector(".navbar")
const notificationsElement = document.querySelector('.notifications')
const loginElement = document.querySelector("#logUser")

navbarController(navbarElement)
notificationController(notificationsElement)
loginController(loginElement)