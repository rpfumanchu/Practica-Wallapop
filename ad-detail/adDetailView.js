export function buildAdDetail(ad) {

  if (ad.state == true) {
    ad.state = "En venta"

  }else {
    ad.state = "Compro"
  }
  
  return `
  <div class="ad-detail">
  <div class="ad">
  <p class="text"> articulo ${ad.name} ${ad.state} ${ad.price} Euros</p>
  <img class="img" src="${ad.img}" alt="imagenes anuncios">
  <p class="text">${ad.estateuse} ${ad.description}</p>
  <span class="span">${ad.tags}</span>
  </div>
  
  </div>
  
 
  
  `;
}