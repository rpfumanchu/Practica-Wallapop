import { singupController } from "./createUserController.js";
import {notificationController} from "../notifications/notificationController.js"

const createUserElement = document.querySelector("#createUser")
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)
singupController(createUserElement)