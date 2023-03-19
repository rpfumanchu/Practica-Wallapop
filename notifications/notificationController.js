import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";

//DONE Mostrar un popup con distintos mensaje y color que desaparece a los 3 segundos
//NOTE devuelve una función para evitar dependencia

export function notificationController(notificationsElement) {
  function showMessage(detail) {

    // Muestra el elemento de notificacion por si se hubiese ocultado por otro mensaje
    notificationsElement.classList.remove("hide");

    if (detail.isError) {
      notificationsElement.classList.add("popup-red");
    } else {
      notificationsElement.classList.add("popup-blue");
    }

    notificationsElement.innerHTML = buildNotificationView(detail.message);

    // Oculto el elemento de notificacion despues de X segundos
    setTimeout(() => {
      notificationsElement.classList.add("hide");
    }, 3000);
  }

  pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
    // console.log("subscribe", message);
    showMessage(message);
  });

  return showMessage;
}
