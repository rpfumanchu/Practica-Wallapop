//DONE Construir un objeto con email y password siguiendo la interfaz definida en el endpoint /auth/register
//DONE Consumir el api de sparrest, utilizando un POST y enviando los datos que ha introducido el usuariexpo

export async function createUser(email, alias, password) {
  const user = {
    username: email,
    alias: alias,
    password: password,
  };

  const response = await fetch("http://localhost:8000/auth/register", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      "content-Type": "application/json",
    },
  });

  //NOTE Gestiono la respuesta
  if (!response.ok) {
    throw new Error("Error, no se pudo crear usuario");
  }
}
