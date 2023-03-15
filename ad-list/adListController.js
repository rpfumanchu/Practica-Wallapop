//import { pubSub } from "../pubSub.js";
import { hideSpinner } from "../spinner/spinnerController.js";
import { notification } from "../utils/notifications.js";
import { getAd } from "./ad.js";
import { buildAdView } from "./adView.js";


//DONE Muestro todos los anuncios 
//NOTE uso pubSub para gestionar posibles errores y notificaciones

export async function adListController(adListElement, page) {
  
  let ads = [];

  try {
    const payload = await getAd(page);
    
    notification(false, "Los anuncios se cargaron correctamente")

    if (payload.ads.length > 0) {
      drawAds(payload, adListElement);
    } else {
      notification(true, "No hay resultados disponibles");
    }

    pagination(page, payload);

  } catch (error) {
    notification(true, "No hemos podido cargar los anuncios");
  } finally {
    hideSpinner(adListElement);
  }
}


function pagination(page, payload) {
  if (page > 1) {
    prewButton.addEventListener("click", () => {
      window.location.href = window.location.origin + "?page=" + (page - 1);
    });

  } else {
    prewButton.classList.add("hide-button");
  }

  if (page < payload.maxPage) {
    nextButton.addEventListener("click", () => {
      window.location.href = window.location.origin + "?page=" + (page + 1);
    });

  } else {
    nextButton.classList.add("hide-button");
  }
}

function drawAds(payload, adListElement) {
  payload.ads.forEach((element) => {
    const newAdElement = buildAdView(element);
    adListElement.appendChild(newAdElement);
  });
}


