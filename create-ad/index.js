import { notificationController } from "../notifications/notificationController.js";
import { navbarController } from "../navbar/navbarController.js";
import { createAdController } from "./createAdController.js";
import { titleController } from "../title/titleController.js";
import { footerController } from "../footer/footerController.js";
import { spinnerController } from "../spinner/spinnerController.js";

const spinnerElement = document.querySelector("#spinner")
const navbarElement = document.querySelector(".navbar");
const notificationsElement = document.querySelector(".notifications");
const titleElement = document.querySelector("#title");
const footerElement = document.querySelector("#footer");

//DONE obtengo de localStorage el token
const token = localStorage.getItem("token");

//NOTE si no hay token lo mando a home directamente
if (!token) {
  window.location = "/";
} else {
  const createAdElement = document.querySelector("#createAdForm");
  createAdController(createAdElement, spinnerElement);
}

spinnerController(spinnerElement)
navbarController(navbarElement);
notificationController(notificationsElement);
titleController(titleElement);
footerController(footerElement);
