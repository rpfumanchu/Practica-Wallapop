import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";


//DONE Mostrar un popup con distintos mensaje y color que al hacer click en el boton desaparece
//NOTE devuelve una función para evitar dependencia

export function notificationController(notificationsElement) {

  function showMessage(detail) {
    if(detail.isError) {
      notificationsElement.classList.add("popup-red");
    }else {
      notificationsElement.classList.add("popup-blue");
    }

    notificationsElement.innerHTML = buildNotificationView(detail.message);

    const endPopupElement = notificationsElement.querySelector("#end-popup") 

    endPopupElement.addEventListener("click", () => {
      deleteNotification(notificationsElement)
    })
  }

  function deleteNotification(notificationsElement) {
    notificationsElement.innerHTML = ""
  }

  pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
    showMessage(message)
  })

  return showMessage

}