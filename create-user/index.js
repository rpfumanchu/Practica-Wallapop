import { notificationController } from "../notifications/notificationController.js";
import { singupController } from "./createUserController.js";
import { navbarController } from "../navbar/navbarController.js";



const navbarElement = document.querySelector(".navbar")
const createUserElement = document.querySelector("#createUser")
const notificationsElement = document.querySelector('.notifications')

navbarController(navbarElement)
notificationController(notificationsElement)
singupController(createUserElement)