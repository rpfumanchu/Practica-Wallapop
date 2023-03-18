import { modifyAdController } from "./adModifyController.js"



//DONE leo la url el id de ad
const params = new URLSearchParams(window.location.search)
const adId = params.get("adId")

//DONE obtengo de localStorage el token
const token = localStorage.getItem("token");

if (!token) {
  window.location = "/";
} else {
  const adModifyElement = document.querySelector("#modifyAdForm");
  modifyAdController(adModifyElement, adId)
}






  

 

