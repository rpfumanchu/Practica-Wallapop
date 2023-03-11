export function buildNavbar() {
  //const navbar = document.createElement("div")
  //navbar.classList.add("navbar")

  //navbar.innerHTML = 
  return `
  <h4>Wallapop</h4>
  <ul class="list">
    <li class="list-item"><a href="./createAd.html" id="createTweetLink">Crear anuncio</a></li>
    <li class="list-item"><a href="./index.html" id="homeLink">Home</a></li>
    <li class="list-item"><a href="./login.html" id="loginLink">Login</a></li>
    <li class="list-item"><a href="./createUser.html" id="createUserLink">Signup</a></li>
    <button id="closeSession">Cerrar sesión</button>
  </ul>
  `;
  //return navbar
}

export function buildGreeting(userName) {
  const greetUser = document.createElement("p")
  greetUser.textContent = `Has iniciado sesión ${userName}`
  return greetUser

}