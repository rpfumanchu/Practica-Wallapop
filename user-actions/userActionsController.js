import { decodeToken } from "../utils/decodeToken.js"
import { buildGreeting, buildNavbar } from "./userActionsView.js"

export function userActtionsController(userActionsElement) {
  userActionsElement.appendChild(buildNavbar())
  
  const token = localStorage.getItem("token")
  const closeSessionElement = userActionsElement.querySelector("#closeSession")
  if (token) {
    const createUserLinkElement = userActionsElement.querySelector("#createUserLink")
    const loginLinkElement = userActionsElement.querySelector('#loginLink')
    createUserLinkElement.remove()
    loginLinkElement.remove()
    
    const payload = decodeToken(token)
    //debugger
    userActionsElement.appendChild(buildGreeting(payload.username))
    closeSessionElement.addEventListener("click", () => {
      localStorage.removeItem('token')
      window.location.reload()
    })
    
  } else {
    const createAdLinkElement = userActionsElement.querySelector('#createTweetLink')
    createAdLinkElement.remove()
    closeSessionElement.remove()
  }

}



