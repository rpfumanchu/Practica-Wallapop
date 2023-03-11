export function buildGreeting(userName) {
  const greetUser = document.createElement("p")
  greetUser.textContent = `Has iniciado sesión ${userName}`
  return greetUser

}