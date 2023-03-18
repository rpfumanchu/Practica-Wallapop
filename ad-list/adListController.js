//import { pubSub } from "../pubSub.js";
import { hideSpinner } from "../spinner/spinnerController.js";
import { drawAds } from "../utils/drawAds.js";
import { notification } from "../utils/notifications.js";
import { pagination } from "../utils/pagination.js";
import { getAd } from "./ad.js";


//DONE Muestro todos los anuncios 
//NOTE uso pubSub para gestionar posibles errores y notificaciones

export async function adListController(adListElement, spinnerElement, page) {
  
  try {
    const payload = await getAd(page);
    //const adTotal = await adFinder()
    pagination(payload.maxPage);
    
    if (payload.ads.length > 0)  {
      notification(false, "Los anuncios se cargaron correctamente")
      drawAds(payload, adListElement);
    
      //addInputListenerToFilter(adListElement);
      
    } else {
      notification(true, "No hay resultados disponibles");
    }

  } catch (error) {
    notification(true, "No hemos podido cargar los anuncios");
  } finally {
    hideSpinner(spinnerElement);
  }

  
}

//  function addInputListenerToFilter(adListElement) {

//   //console.log(adTotal)
  
//   adListElement.querySelector("#filter_list_ad").addEventListener("input", async ev =>  {
//       const text = ev.target.value.toLowerCase();
//       const adTotal = await adFinder()
//             drawList( adTotal);

//       adListElement.querySelectorAll("li").forEach(  el => {
//           // console.log("Filtrando el", el, text);
        
//           el.classList.add("hide");

//           if(!text) {
            
//               // console.log("No hay texto, mostrando elemento", el);
//               //el.classList.add("hide");
//               el.classList.remove("hide");
//           } else {
//               const content = el.dataset.content;
//               if(content.includes(text)) {
                
//                   // console.log("El contenido incluye el texto, mostrando elemento", el);
//                   el.classList.remove("hide");
//               }
//           }
//       })
//   })
// }





