import { adStatusImage } from "../utils/adStatusImagen.js";

export function drawList(adListElement,  adTotal) {
  //const newAdElement = document.createElement("div");
  adStatusImage(adTotal)
  adListElement.innerHTML = `
     
     <div class="find">
      <input placeholder="Buscar anuncio..." id="filter_list_ad" />
     </div>
      <ul class"ad-find">
      
          ${createListItems(adTotal)}
      </ul>`;
}

function createListItems(adTotal) {
  
  return adTotal.map(el => `
  
      <li class="hide" data-content="${Object.values(el)}">
        <div class="ad">
          <a class="ad-link" href="/ad-detail.html?adId=${el.id}">
          <p class="ad-p"> articulo ${el.name} ${el.state} </p>
          <img class="img" src="${el.img}" alt="imagenes anuncios">
          <span class="span">${el.tags}</span>
          </a>  
        </div>
      </li>
  `).join("");
}