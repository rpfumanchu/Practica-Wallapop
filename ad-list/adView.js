import { adStatusImage } from "../utils/adStatusImagen.js";


export function buildAdView(ad) {
  const newAdElement = document.createElement("div");
  newAdElement.classList.add("ad")
  
  adStatusImage(ad);
  
  newAdElement.innerHTML = `
  <a class="ad-link" href="/ad-detail.html?adId=${ad.id}">
  <p class="ad-p"> articulo ${ad.name} ${ad.state} </p>
  <img class="img" src="${ad.img}" alt="imagenes anuncios">
  <span class="span">${ad.tags}</span>
  </a>
  `;

  return newAdElement
}

// export function drawList(adListElement,  adTotal) {
//   //const newAdElement = document.createElement("div");
//   adListElement.innerHTML = `
//       <input class="find" placeholder="Buscar anuncio..." id="filter_list_ad" />
//       <ul>
//           ${createListItems(adTotal)}
//       </ul>`;
// }

// function createListItems(adTotal) {
//   return adTotal.map(el => `
//       <li data-content="${Object.values(el).join("||").toLowerCase()}">
//           <div>
//             <a class="ad-link" href="/ad-detail.html?adId=${adTotal.id}">
//             <p class="ad-p"> articulo ${adTotal.name} ${adTotal.state} </p>
//             <img class="img" src="${adTotal.img}" alt="imagenes anuncios">
//             <span class="span">${adTotal.tags}</span>
//             </a>  
//           </div>
//       </li>
//   `).join("");
// }

// function tagsUnicos(ad) {
//   let result = ad.filter((item, index) => {
//     return ad.indexOf(item) === index
//   })
//   console.log(result)
// }

