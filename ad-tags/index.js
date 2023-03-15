import { adTags } from "./adTagsController.js";
import { navbarController } from "../navbar/navbarController.js";
import { notificationController } from "../notifications/notificationController.js";
import { paginationButton } from "../pagination-buttons/paginationBottonController.js";

const notificationElement = document.querySelector(".notifications");
const paginationButtonElement = document.querySelector(".pagination")
const navbarElement = document.querySelector(".navbar")

notificationController(notificationElement)
navbarController(navbarElement)
paginationButton(paginationButtonElement)



const params = new URLSearchParams(window.location.search);
const tags = params.get("tags") ;


  const adTagsElement = document.querySelector(".adtags");
  adTags(adTagsElement, tags);


//const adTagsElement = document.querySelector(".tags")


