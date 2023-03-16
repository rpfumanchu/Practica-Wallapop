import { adTags } from "./adTagsController.js";
import { navbarController } from "../navbar/navbarController.js";
import { notificationController } from "../notifications/notificationController.js";
import { paginationButton } from "../pagination-buttons/paginationBottonController.js";
import { footerController } from "../footer/footerController.js";
import { titleController } from "../title/titleController.js";
// import { spinnerController } from "../spinner/spinnerController.js";


//const spinnerElement = document.querySelector("#spinner");
const notificationElement = document.querySelector(".notifications");
const paginationButtonElement = document.querySelector(".pagination")
const navbarElement = document.querySelector(".navbar")
const titleElement = document.querySelector("#title")
const footerElement = document.querySelector("#footer")

//spinnerController(spinnerElement)
notificationController(notificationElement)
navbarController(navbarElement)
titleController(titleElement)
paginationButton(paginationButtonElement)
footerController(footerElement)



const params = new URLSearchParams(window.location.search);
const tags = params.get("tags") ;


  const adTagsElement = document.querySelector(".adtags");
  adTags(adTagsElement, tags);


//const adTagsElement = document.querySelector(".tags")


