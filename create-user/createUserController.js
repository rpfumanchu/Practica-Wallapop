import { pubSub } from "../pubSub.js";
import { homePage } from "../utils/homePage.js";
import { createUser } from "./createUser.js";



//DONE Enganchar evento submit
//DONE Comprobar que las contraseñas sean iguales
//DONE Comprobar que el email pasa por la regExp

export function singupController(createUserElement) {

  createUserElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const passwordElement = createUserElement.querySelector("#password");
    const passwordConfirmElement = createUserElement.querySelector("#passwordConfirm");
    const emailElement = createUserElement.querySelector("#username");
    const aliasElement = createUserElement.querySelector("#alias");

    if (isEmailValid(emailElement.value) &&
      isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {

        try {
          await createUser(emailElement.value, aliasElement.value, passwordElement.value)
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            isError: false,
            message: "Usuario creado correctamente"
          });
          homePage()
          
        } catch (error) {
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            isError: true,
            message: error.message,
          });
        }
        createUserElement.reset();
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
