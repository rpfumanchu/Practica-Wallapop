import { decodeToken } from "../utils/decodeToken.js";
import { modifyAd, getAdModifyId } from "./adModify.js";
import { homePage } from "../utils/homePage.js";
import { notification } from "../utils/notifications.js";

export async function modifyAdController(adModifyElement, adId) {
  
  const token = localStorage.getItem("token");
  //console.log("token", token);

  const userInfo = decodeToken(token);
  //console.log("userInfo", userInfo);

  const ad = await getAdModifyId(adId);
  //console.log("ad", ad);

  if (ad.userId !== userInfo.userId) {
    alert("No puedes modificar un anuncio que no es tuyo");
    window.location = "/";
    return;
  }

  //let formModifyData = {};

  const keys = Object.keys(ad);
  
  for(let key of keys) {
    const input = adModifyElement.elements[key];
    if(!input) {
      //console.log(`Key ${key} no encontrada en el formulario`, adModifyElement.elements);
      continue;
    }
    const val = ad[key];
    switch(input.type) {
        case 'checkbox': input.checked = !!val; break;
        default:         input.value = val;     break;
    }
  }
  
  //const modifyButtonElement = adModifyElement.querySelector("#btn-modifyAd");
  //modifyButtonElement.remove();

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
      await modifyAd(newAd, ad.id);
      homePage();
    } catch (error) {
      notification(true, error.message);
    }

  });
  
}

      // formModifyData.forEach((value, key) => {
      //   formModifyData[key] = value;
      // });
