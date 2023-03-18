import { homePage } from "../utils/homePage.js";
import { notification } from "../utils/notifications.js";
import { createAd } from "./createAd.js";

//DONE capturo el evento submit del formulario
//NOTE el evento submit de un formulario intentara validar esos datos en la parte servidora y no quiero eso
//NOTE para que eso no ocurra uso preventDefault()

export function createAdController(createAdElement) {
  createAdElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    // nota para mi voy a usar formData para practicar otra forma de traerme los datos
    const formData = new FormData(createAdElement);

    const newAd = {};
    formData.forEach((value, key) => {
      newAd[key] = value ;
    });

    try {
      await createAd(newAd);
      notification(false, "Anuncio creado correctamente");

      homePage();
    } catch (error) {
      notification(true, error.message);
    }
  });
}
