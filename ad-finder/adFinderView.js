import { adStatusImage } from "../utils/adStatusImagen.js";

export function drawList(adListElement,  adTotal) {
  //const newAdElement = document.createElement("div");
  
  adListElement.innerHTML = `
     
     <div class="find">
     <label  for="filter_list_ad"></label>
      <input placeholder="Buscar anuncio..." id="filter_list_ad" />
     </div>
      <div class="ad-find">
      
          ${createListItems(adTotal)}
      </div>`;
}

function createListItems(adTotal) {
  
  return adTotal.map(el => `
  
      <div id="li" class="hide" data-content="${Object.values(el).join("||").toLowerCase()}">
          <div class="ad">
            <a class="ad-link" href="/ad-detail.html?adId=${el.id}">
            <p class="ad-p"> articulo ${el.name} ${el.state} </p>
            <img class="img" src="${el.img}" alt="imagenes anuncios">
            <span class="span">${el.tags}</span>
            </a>  
          </div>
      </div>
  `).join("");
}