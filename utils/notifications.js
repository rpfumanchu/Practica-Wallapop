import { pubSub } from "../pubSub.js";

export function notification(condition, mensaje) {
  pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
    isError: condition,
    message: mensaje,
  });
}