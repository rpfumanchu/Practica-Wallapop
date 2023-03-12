import { decodeToken } from "../utils/decodeToken.js"
import { buildGreeting, buildNavbar } from "./navbarView.js"

export function navbarController(navbarElement) {
  navbarElement.innerHTML = buildNavbar()
  const token = localStorage.getItem("token")
  const closeSessionElement = navbarElement.querySelector("#closeSession")
  if (token) {
    const createUserLinkElement = navbarElement.querySelector("#createUserLink")
    const loginLinkElement = navbarElement.querySelector('#loginLink')
    createUserLinkElement.remove()
    loginLinkElement.remove()
    
    const payload = decodeToken(token)
    //debugger
    navbarElement.appendChild(buildGreeting(payload.username))
    closeSessionElement.addEventListener("click", () => {
      localStorage.removeItem('token')
      window.location.reload()
    })
    
  } else {
    const createAdLinkElement = navbarElement.querySelector('#createAdLink')
    createAdLinkElement.remove()
    closeSessionElement.remove()
  }

}



