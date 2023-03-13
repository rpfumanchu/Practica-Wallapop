import { pubSub } from "../pubSub.js";
import { hideSpinner } from "../spinner/spinnerController.js";
import { buildSpinnerView } from "../spinner/spinnerView.js";
import { getAd } from "./ad.js";
import { buildAdView } from "./adView.js";

//DONE Muestro todos los anuncios 
//NOTE uso pubSub para gestionar posibles errores y notificaciones

export async function adListController(adListElement, page) {
  adListElement.inneHTML = buildSpinnerView();

  let ads = [];

  try {

    // const params = new URLSearchParams(window.location.search);
    // const page = parseInt(params.get("page")) || 1;

    const payload = await getAd(page);
    


    //sendCustomEvent({isError: false, message: "los anincios se cargaron correctamente"}, adListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
      isError: false,
      message: "los anuncios se cargaron correctamente",
    });

    if (payload.ads.length > 0) {
      drawAds(payload, adListElement);
    } else {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: true,
        message: "No hay resultados disponibles",
      });
    }

    if(page > 1) {
      prewButton.addEventListener("click", () => {
        window.location.href = window.location.origin + "?page=" + (page - 1); 
      })
      // crear boton pagina anterior
      // drawPreviousPaginationButton();
      // window.location.origin + ?page=x+1 = https://localhost:5000?page=2
    }

    if(page < payload.maxPage) {
      nextButton.addEventListener("click", () => {
        window.location.href = window.location.origin + "?page=" + (page + 1); 
      })
      // crear boton pagina siguiente
      // drawNextPaginationButton();
    }

  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
      isError: true,
      message: "No hemos podido cargar los anuncios",
    });
  } finally {
    hideSpinner();
  }
  
}

function drawAds(payload, adListElement) {
  payload.ads.forEach((element) => {
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

// let data = [1,2,6,1,2,5,9,'33','33'];

// const result = data.reduce((acc,item)=>{
//   if(!acc.includes(item)){
//     acc.push(item);
//   }
//   return acc;
// },[])

// console.log(result); //[1,2,6,5,9,'33']