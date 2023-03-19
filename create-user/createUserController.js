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

    showSpinner(spinnerElement)

    try {

      if (!isEmailValid(emailElement.value)) throw { message: "El email no está escrito de forma correcta" };
      if (!isPasswordValid(passwordElement.value, passwordConfirmElement.value)) throw { message: "Las contraseñas no coinciden" };

      await createUser(emailElement.value, passwordElement.value);

      notification(false, "Usuario creado con éxito");

      homePage();
    } catch (error) {
      notification(false, error.message);
      createUserElement.reset();
    }
    finally {
      hideSpinner(spinnerElement)
    }
    
  });

  function isPasswordValid(password, passwordConfirmation) {
    return password !== passwordConfirmation;
  }
}


