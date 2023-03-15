import { deleteAd, getAdDetail } from "./adDetail.js";
import { buildAdDetail } from "./adDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { homePage } from "../utils/homePage.js";
import { notification } from "../utils/notifications.js";

export const adDetailController = async (adDetailElement, adId) => {
  try {
    const ad = await getAdDetail(adId);
    adDetailElement.innerHTML = buildAdDetail(ad);
    deleteAdButton(adDetailElement, ad);
    notification(false, "Detalle del anuncio se cargo correctamente");
  } catch (error) {
    notification(true, error.message);
  }

  //DONE Añado evento click al boton de borrar anuncio
  function deleteAdButton(adDetailElement, ad) {
    const token = localStorage.getItem("token");
    const deleteButtonElement = adDetailElement.querySelector("#deleteAd");

    if (!token) {
      deleteButtonElement.remove();
    } else {
      const userInfo = decodeToken(token);
      if (ad.userId === userInfo.userId) {
        deleteButtonElement.addEventListener("click", async () => {
          const answer = confirm("¿Seguro que quieres borrar el anuncio?");
          if (answer) {
            await deleteAd(ad.id);
            notification(false, "Anuncio borrado correctamente");

            homePage();
          }
        });
      } else {
        deleteButtonElement.remove();
      }
    }
  }
};
