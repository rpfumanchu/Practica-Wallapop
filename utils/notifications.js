import { pubSub } from "../pubSub.js";

export function notification(condition, mensaje) {
  console.log("notification publish", condition, mensaje);
  pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
    isError: condition,
    message: mensaje,
  });
}