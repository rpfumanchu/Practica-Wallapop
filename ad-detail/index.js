import { notificationController } from "../notifications/notificationController.js"
import { adDetailController } from "./adDetailController.js"
import { navbarController } from "../navbar/navbarController.js";

const navbarElement = document.querySelector(".navbar")
const notificationsElement = document.querySelector('.notifications')

//DONE leo la url el id de ad
const params = new URLSearchParams(window.location.search)
const adId = params.get("adId")

notificationController(notificationsElement)
navbarController(navbarElement)

//DONE Me aseguro que queryparam existe, si no redirecciono a la página principal
if (!adId) {
  window.location = "/"
} else {

  const adDetailElement = document.querySelector(".ad-detail");

  adDetailController(adDetailElement, adId)

}