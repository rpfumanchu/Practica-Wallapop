import { pubSub } from "../pubSub.js";
import { homePage } from "../utils/homePage.js";
import { createAd } from "./createAd.js";

//DONE capturo el evento submit del formulario
export function createAdController(createAdElement) {

  createAdElement.addEventListener("submit", async (event) => {
    //NOTE el evento submit de un formulari intentara validar esos datos en la parte servidora y no quiero eso
    //NOTE para que eso no ocurra uso preventDefault()
    event.preventDefault()

    // nota para mi voy a usar formData para practicar otra forma de traerme los datos
    const formData = new FormData(createAdElement);
    const adContent = formData.get("name")
    const adState = formData.get("state")
    const adPrice = formData.get("price") 
    const adTag = formData.get("tags") 
    const separatingTag = adTag.split(",")
    const adStateUse = formData.get("stateuse")
    const adDescription = formData.get("description")   
    const adImg = formData.get("img") 

    try {
      await createAd(adContent, adState, adPrice, separatingTag, adStateUse, adDescription, adImg)
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: false,
        message: "Anuncio creado correctamente"
      });
      homePage()
      
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: true,
        message: error.message,
      });
    }
  })

}