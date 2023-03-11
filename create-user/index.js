import { singupController } from "./createUserController.js";
import {notificationController} from "../notifications/notificationController.js"
import { userActtionsController } from "../user-actions/userActionsController.js"

const userActionsElement = document.querySelector(".user-actions")
const createUserElement = document.querySelector("#createUser")
const notificationsElement = document.querySelector('.notifications')

userActtionsController(userActionsElement)
notificationController(notificationsElement)
singupController(createUserElement)