import { notificationController } from "../notifications/notificationController.js"
import { userActtionsController } from "../user-actions/userActionsController.js"
import { loginController } from "./loginController.js"

const userActionsElement = document.querySelector(".user-actions")
const notificationsElement = document.querySelector('.notifications')
const loginElement = document.querySelector("#logUser")

userActtionsController(userActionsElement)
notificationController(notificationsElement)
loginController(loginElement)