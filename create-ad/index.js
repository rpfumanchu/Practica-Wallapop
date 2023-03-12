import { notificationController } from "../notifications/notificationController.js";
import { navbarController } from "../navbar/navbarController.js";
import { createAdController } from "./createAdController.js";




const navbarElement = document.querySelector(".navbar")
const notificationsElement = document.querySelector('.notifications')

//DONE obtengo de localStorage el token
const token = localStorage.getItem("token")

//NOTE si no hay token lo mando a home directamente
if (!token) {
  window.location = "/"
} else {
  const createAdElement = document.querySelector("#createAdForm")
  createAdController(createAdElement)
}

navbarController(navbarElement)
notificationController(notificationsElement)
