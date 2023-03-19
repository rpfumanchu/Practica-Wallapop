//import { pubSub } from "../pubSub.js";
import { hideSpinner, showSpinner } from "../spinner/spinnerController.js";
import { drawAds } from "../utils/drawAds.js";
import { notification } from "../utils/notifications.js";
import { pagination } from "../utils/pagination.js";
import { getAd } from "./ad.js";


//DONE Muestro todos los anuncios 
//NOTE uso pubSub para gestionar posibles errores y notificaciones

export async function adListController(adListElement, spinnerElement, page) {
  showSpinner(spinnerElement)
  
  try {
    const payload = await getAd(page);
    //const adTotal = await adFinder()
    pagination(payload.maxPage);
    
    if (payload.ads.length > 0)  {
      drawAds(payload, adListElement);
      notification(false, "Los anuncios se cargaron correctamente")
    
    } else {
      notification(true, "No hay resultados disponibles");
    }

  } catch (error) {
    notification(true, "No hemos podido cargar los anuncios");
  } finally {
    hideSpinner(spinnerElement);
  }
}






