export async function getAdDetail(adId) {

  const response = await fetch(`http://localhost:8000/api/ads/${adId}`)

  if (!response.ok) {
    throw new Error("El anuncio solicitado no existe")
  }

  const ad = await response.json();

  return ad;
}


