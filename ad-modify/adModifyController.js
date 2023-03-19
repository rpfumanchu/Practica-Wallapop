import { decodeToken } from "../utils/decodeToken.js";
import { modifyAd, getAdModifyId } from "./adModify.js";
import { homePage } from "../utils/homePage.js";
import { notification } from "../utils/notifications.js";
import { hideSpinner, showSpinner } from "../spinner/spinnerController.js";


export async function modifyAdController(adModifyElement, adId, spinnerElement) {
  
  const token = localStorage.getItem("token");
  const userInfo = decodeToken(token);
  const ad = await getAdModifyId(adId);

  //NOTE guardian para asegurarme
  if (ad.userId !== userInfo.userId) {
    notification(true, "No puedes modificar un anuncio que no te pertenece");
    homePage()
    return;
  }

  const keys = Object.keys(ad);
  
  for(let key of keys) {
    const input = adModifyElement.elements[key];
    if(!input) {
    
      continue;
    }
    const val = ad[key];
    switch(input.type) {
        case 'checkbox': input.checked = !!val; break;
        default:         input.value = val;     break;
    }
  }
  

  //NOTE el evento submit de un formulario intentara validar esos datos en la parte servidora y no quiero eso
  //NOTE para que eso no ocurra uso preventDefault()

  adModifyElement.addEventListener("submit", async (event) => {

    event.preventDefault();
    const formData = new FormData(adModifyElement);
    const newAd = {};
    formData.forEach((value, key) => {
      newAd[key] = value ;
    });

    try{
      showSpinner(spinnerElement);
      await modifyAd(newAd, ad.id);
      notification(false, "Anuncio modificado correctamente");
      homePage();
    } catch (error) {
      notification(true, error.message);
    } finally {
      hideSpinner(spinnerElement)
    }

  });
  
}
    
