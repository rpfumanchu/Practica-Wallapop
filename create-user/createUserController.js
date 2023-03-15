import { homePage } from "../utils/homePage.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { notification } from "../utils/notifications.js";
import { createUser } from "./createUser.js";



//DONE Enganchar evento submit
//DONE Comprobar que las contraseñas sean iguales
//DONE Comprobar que el email pasa por la regExp

export function singupController(createUserElement) {
  createUserElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const passwordElement = createUserElement.querySelector("#password");
    const passwordConfirmElement =
      createUserElement.querySelector("#passwordConfirm");
    const emailElement = createUserElement.querySelector("#username");

     if (!isEmailValid(emailElement.value)) {
      notification(true, "El email no está escrito de forma correcta");
  
    }else if (
      isEmailValid(emailElement.value) &&
      isPasswordValid(passwordElement.value, passwordConfirmElement.value)
    ) {
      try {
        await createUser(emailElement.value, passwordElement.value);
        notification(false, "usuario creado con exito");

        homePage();
      } catch (error) {
        notification(false, error.message);
      }
      createUserElement.reset();
    } 
  });

  // function isEmailValid(email) {
  //   const mailRegExp = new RegExp(
  //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //   );

  //   if (!mailRegExp.test(email)) {
  //     notification(true, "El email no está escrito de forma correcta");

  //     return false;
  //   }
  //   return true;
  // }

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      notification(true, "Las contraseñas no son iguales");

      return false;
    }
    return true;
  }
}
