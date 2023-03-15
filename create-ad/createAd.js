export async function createAd(newAd) {
  //DONE cojo el token de localStorage
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8000/api/ads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newAd),
  });

  if (!response.ok) {
    throw new Error("Error creando anuncio");
  }
}
