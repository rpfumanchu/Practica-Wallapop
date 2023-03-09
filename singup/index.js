import { singupController } from "./singupController.js";
import {notificationController} from "../notifications/notificationController.js"

const singupElement = document.querySelector("#createUser")
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)
singupController(singupElement)