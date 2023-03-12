export async function createAd(adContent, adState, adPrice, separatingTag, adStateUse, adDescription, adImg) {

  const newAd = {
    name: adContent,
    state: adState,
    price: adPrice,
    tags: [separatingTag],
    stateUse: adStateUse,
    description: adDescription,
    img: adImg
  }

  //DONE cojo el token de localStorage
  const token = localStorage.getItem("token")

  const response = await fetch("http://localhost:8000/api/ads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newAd)
  })

  if (!response.ok) {
    throw new Error("Error creando anuncio")
  }

}