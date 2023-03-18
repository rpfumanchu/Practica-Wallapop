// export async function getAdModify() {
//   const response = await fetch("http://localhost:8000/api/ads");

//   if (!response.ok) {
//     throw new Error("El anuncio solicitado no existe");
//   }

//   const adModify = await response.json();

//   return adModify;
// }


export async function getAdModifyId(adId) {
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`);

  if (!response.ok) {
    throw new Error("El anuncio solicitado no existe");
  }

  const adModify = await response.json();

  return adModify;
}



export async function modifyAd(newAD, adId) {
  const token = localStorage.getItem("token");
  
  const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newAD),
  });

  
  if (!response.ok) {
    throw new Error("Error actualizando anuncio");
  }


  // const adModifyId = await response.json();

  // return adModifyId;

}
//modifyAdForm