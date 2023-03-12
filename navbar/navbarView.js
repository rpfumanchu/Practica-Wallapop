export function buildNavbar() {
  //const navbar = document.createElement("div")
  //navbar.classList.add("navbar")

  //navbar.innerHTML = 
  return `
  <h4>Wallapop</h4>
  <ul class="list">
    <li class="list-item"><a href="./createAd.html" id="createAdLink">Crear anuncio</a></li>
    <li class="list-item"><a href="./index.html" id="homeLink">Home</a></li>
    <li class="list-item"><a href="./login.html" id="loginLink">Login</a></li>
    <li class="list-item"><a href="./createUser.html" id="createUserLink">Signup</a></li>
    <button class="close-button" id="closeSession">Cerrar sesión</button>
  </ul>
  `;
  //return navbar
}

export function buildGreeting(userName) {
  const greetUser = document.createElement("p")
  greetUser.classList.add("greet-user")
  greetUser.innerHTML = `Has iniciado sesión:<p class="greet-user-p"> ${userName}</p>`
  return greetUser

}