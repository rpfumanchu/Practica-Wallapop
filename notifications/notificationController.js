import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";

//DONE Mostrar un popup con distintos mensaje y color que desaparece a los 3 segundos
//NOTE devuelve una función para evitar dependencia

export function notificationController(notificationsElement) {
  function showMessage(detail) {
    if (detail.isError) {
      notificationsElement.classList.add("popup-red");
    } else {
      notificationsElement.classList.add("popup-blue");
    }

    notificationsElement.innerHTML = buildNotificationView(detail.message);


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(notificationsElement.classList.add("hide"));
      }, 3000);
    });
  }

  pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
    showMessage(message);
  });

  return showMessage;
}
