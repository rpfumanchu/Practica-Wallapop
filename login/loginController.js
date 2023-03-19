import { homePage } from "../utils/homePage.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { notification } from "../utils/notifications.js";
import { loginUser } from "./login.js";
import { showSpinner, hideSpinner } from "../spinner/spinnerController.js";

//DONE verificar que el formato de email pase la regExp
//DONE si el email existe y EL token coincide estas logeado
//DONE manejar con pubsub distintos errores y exito

export function loginController(loginElement, spinnerElement) {
  showSpinner(spinnerElement);
  hideSpinner(spinnerElement);
  loginElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailElement = loginElement.querySelector("#username");
    const passwordElement = loginElement.querySelector("#password");

    if (isEmailValid(emailElement.value)) {
      try {
        const jtw = await loginUser(emailElement.value, passwordElement.value);
        localStorage.setItem("token", jtw);
        notification(false, "Has iniciado sesión");

        homePage();
      } catch (error) {
        notification(true, error.message);
      }
    } else if (!isEmailValid(emailElement.value)) {
      notification(true, "El email no está escrito de forma correcta");
    }
    loginElement.reset();
  });
}
