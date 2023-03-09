import { pubSub } from "../pubSub.js";
import { createUser } from "./singup.js";



//DONE Enganchar evento submit
//DONE Comprobar que las contraseñas sean iguales
//DONE Comprobar que el email pasa por la regExp

export function singupController(singupElement) {

  singupElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const passwordElement = singupElement.querySelector("#password");
    const passwordConfirmElement = singupElement.querySelector("#passwordConfirm");
    const emailElement = singupElement.querySelector("#username");

    if (isEmailValid(emailElement.value) &&
      isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {

        try {
          await createUser(emailElement.value, passwordElement.value)
          singupElement.reset();
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            isError: false,
            message: "Usuario creado correctamente"
          });
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                window.location = "/"
              )
            }, 1000);
          })
          
        } catch (error) {
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            isError: true,
            message: error.message,
          });
        }
      }
      
    });

  function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!mailRegExp.test(email)) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: true,
        message: "El email no está escrito de forma correcta",
      });
      return false
    }
    return true
  }

  function isPasswordValid(password, passwordConfirmation) {

    if (password !== passwordConfirmation) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: true,
        message: "Las contraseñas no son iguales",
      });
      return false
    }
    return true
  }
}
