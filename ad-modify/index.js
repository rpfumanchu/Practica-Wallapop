import { modifyAdController } from "./adModifyController.js"
import { navbarController } from "../navbar/navbarController.js";
import { notificationController } from "../notifications/notificationController.js";
import { footerController } from "../footer/footerController.js";
import { titleController } from "../title/titleController.js";
import { spinnerController } from "../spinner/spinnerController.js";

const spinnerElement = document.querySelector("#spinner");
const notificationElement = document.querySelector(".notifications");
const navbarElement = document.querySelector(".navbar");
const titleElement = document.querySelector("#title");
const footerElement = document.querySelector("#footer");

spinnerController(spinnerElement);
notificationController(notificationElement);
navbarController(navbarElement);
titleController(titleElement);
footerController(footerElement);



//DONE leo la url el id de ad
const params = new URLSearchParams(window.location.search)
const adId = params.get("adId")

//DONE obtengo de localStorage el token
const token = localStorage.getItem("token");

if (!token) {
  window.location = "/";
} else {
  const adModifyElement = document.querySelector("#modifyAdForm");
  modifyAdController(adModifyElement, adId, spinnerElement)
}






  

 

