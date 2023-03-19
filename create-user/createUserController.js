import { showSpinner, hideSpinner } from "../spinner/spinnerController.js";
import { homePage } from "../utils/homePage.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { notification } from "../utils/notifications.js";
import { createUser } from "./createUser.js";



//DONE Enganchar evento submit
//DONE Comprobar que las contraseñas sean iguales
//DONE Comprobar que el email pasa por la regExp

export function singupController(createUserElement, spinnerElement) {
  showSpinner(spinnerElement)
  hideSpinner(spinnerElement)
  createUserElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const passwordElement = createUserElement.querySelector("#password");
    const passwordConfirmElement = createUserElement.querySelector("#passwordConfirm");
    const emailElement = createUserElement.querySelector("#username");

    if (
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
    } else if (!isEmailValid(emailElement.value)){
      notification(true, "El email no está escrito de forma correcta");

    }
    createUserElement.reset();
  });

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      notification(true, "Las contraseñas no son iguales");

      return false;
    }
    return true;
  }
}


