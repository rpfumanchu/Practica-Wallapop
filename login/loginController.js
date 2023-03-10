import { pubSub } from "../pubSub.js";
import { homePage } from "../utils/homePage.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { loginUser } from "./login.js";


//DONE verificar que el formato de email pase la regExp
//DONE si el email existe y EL token coincide estas logeado
//DONE manejar con pubsub distintos errores y exito
export function loginController(loginElement) {
  loginElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailElement = loginElement.querySelector("#username");
    const passwordElement = loginElement.querySelector("#password");

    if (isEmailValid(emailElement.value)) {
      try {
        const jtw = await loginUser(emailElement.value, passwordElement.value)
        localStorage.setItem("token", jtw)
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
          isError: false,
          message: "Has iniciado sesión"
        });
        homePage()
       
      } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
          isError: true,
          message: error.message,
        });
      }
    } else {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        isError: true,
        message: "Email no válido",
      });
    }
    loginElement.reset();
  })

  // async function logUser(loginElement) {
  //   // const formData = new FormData(loginElement);
  //   // const username = formData.get("username")
  //   // const password = formData.get('password')


}