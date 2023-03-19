import { adStatusImage } from "../utils/adStatusImagen.js";

export function drawList(adFindElement,  adTotal) {
  //const newAdElement = document.createElement("div");
 
  adFindElement.innerHTML = `
  <div class="find">
    <label for="filter_list_ad"></label>
    <input placeholder="Buscar anuncio..." id="filter_list_ad" />
  </div>
  <div class="ad-find">
    ${createListItems(adTotal)}
  </div>`;
}

function createListItems(adTotal) {

  return adTotal.map(ad => {
    adStatusImage(ad);
    const html = `
      <div class="finder-item hide" data-name="${ad.name?.toLowerCase() || "undefined"}">
          <div class="ad">
            <a class="ad-link" href="/ad-detail.html?adId=${ad.id}" />
              <p class="ad-p"> articulo ${ad.name} ${ad.state} </p>
              <img class="img" src="${ad.img}" alt="imagenes anuncios" />
              <span class="span">${ad.tags}</span>
            </a>  
          </div>
      </div>
    `;
    return html;
  }).join("");
}