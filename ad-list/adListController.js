import { pubSub } from "../pubSub.js";
import { hideSpinner } from "../spinner/spinnerController.js";
import { buildSpinnerView } from "../spinner/spinnerView.js";
import { getAd } from "./ad.js";
import { buildAdView } from "./adView.js";

//DONE Muestro todos los anuncios gestionando posibles errores y notificaciones

export async function adListController(adListElement) {
  adListElement.inneHrTML = buildSpinnerView()

  let ads = []

  try {
    ads = await getAd()

    //sendCustomEvent({isError: false, message: "los anincios se cargaron correctamente"}, adListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {isError: false, message: "los anuncios se cargaron correctamente"})

    if (ads.length > 0) {
      drawAds(ads,adListElement);

    }else {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {isError: true, message: "No hay resultados disponibles"})
    }
    
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {isError: true, message: "No hemos podido cargar los anuncios"})
  } finally {
    hideSpinner()
  }
}

function drawAds(ads,adListElement) {
  ads.forEach(element => {
    const newAdElement = buildAdView(element);
    adListElement.appendChild(newAdElement);
  });
}



// function sendCustomEvent(message, adListElement){
//   const event = new CustomEvent("newNotification", {
//     detail: {
//       message: message
//     }
//   })
//   adListElement.dispatchEvent(event)
// }