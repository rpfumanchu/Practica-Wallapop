import { notificationController } from "../notifications/notificationController.js"
import { loginController } from "./loginController.js"

const notificationsElement = document.querySelector('.notifications')
const loginElement = document.querySelector("#logUser")

notificationController(notificationsElement)
loginController(loginElement)