export function buildAdView(ad) {
  const newAdElement = document.createElement("div");
  newAdElement.classList.add("ad")
  
  if (ad.state == true) {
    ad.state = "En venta"

  }else {
    ad.state = "Compro"
  }
  newAdElement.innerHTML = `
  <a class="ad-link" href="/ad-detail.html?adId=${ad.id}">
  <p class="ad-p"> articulo ${ad.name} ${ad.state} </p>
  <img class="img" src="${ad.img}" alt="imagenes anuncios">
  <span class="span">${ad.tags}</span>
  </a>
  `;

  return newAdElement

}

// function tagsUnicos(ad) {
//   let result = ad.filter((item, index) => {
//     return ad.indexOf(item) === index
//   })
//   console.log(result)
// }

