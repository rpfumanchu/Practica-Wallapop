//DONE Obtengo la segunda parte del array que es donde estan los datos para poder acceder a ellos
//NOTE Con atob, es un metodo que me va a decodificar el token

export const decodeToken = (token) => {
  let decodedToken;

  try {
    const stringToken = atob(token.split(".")[1]);
    decodedToken = JSON.parse(stringToken);

  } catch (error) {
    return null;
  }
  return decodedToken
}