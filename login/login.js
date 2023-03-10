export async function loginUser(email, password) {
  const user = {
    username: email,
    password: password
  }

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    throw new Error("No se ha podido identificar al usuario")
  }

  const data = await response.json()

  //NOTE necesito que me devuelva la respuesta con el Token para posteriormente poder usarlo
  return data.accessToken

}