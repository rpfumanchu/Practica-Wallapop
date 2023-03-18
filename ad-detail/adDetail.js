
export async function getAdDetail(adId) {
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`);

  if (!response.ok) {
    throw new Error("El anuncio solicitado no existe");
  }

  const ad = await response.json();

  return ad;
}


//DONE vinculo sparrest para poder borrar un anuncio si tengo token
export async function deleteAd(adId) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}




