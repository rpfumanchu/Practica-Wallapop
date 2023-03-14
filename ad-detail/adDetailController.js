import { pubSub } from "../pubSub.js";
import { deleteAd, getAdDetail } from "./adDetail.js";
import { buildAdDetail } from "./adDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { homePage } from "../utils/homePage.js";

export const adDetailController = async (adDetailElement, adId) => {
  try {
    const ad = await getAdDetail(adId);
    adDetailElement.innerHTML = buildAdDetail(ad);
    deleteAdButton(adDetailElement, ad);

    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
      isError: false,
      message: "Detalle del anuncio se cargo correctamente",
    });
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
      isError: true,
      message: error.message,
    });
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
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
              isError: false,
              message: "Anuncio borrado correctamente",
            });
            homePage();
          }
        });
      } else {
        deleteButtonElement.remove();
      }
    }
  }
};
