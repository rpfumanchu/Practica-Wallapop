export function buildAdView(ad) {
  const newAdElement = document.createElement("div");
  newAdElement.classList.add()
  
  if (ad.state == true) {
    ad.state = "En venta"

  }else {
    ad.state = "Compro"
  }
  newAdElement.innerHTML = `
  <div class="ad">
  <p> articulo ${ad.name} ${ad.state} </p>
    <div><img class="img" src="${ad.img}" alt="imagenes anuncios"></div>
    <span class="span">${ad.tags}</span>
  </div>`;

  return newAdElement

}

