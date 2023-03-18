import { adStatusImage } from "../utils/adStatusImagen.js";

export function buildAdDetail(ad) {

  adStatusImage(ad)

  return `
  <div class="ad-detail">
  <div class="ad">
    <p class="text"> articulo ${ad.name} ${ad.state} ${ad.price} Euros</p>
    <img class="img" src="${ad.img}" alt="imagenes anuncios">
    <p class="text">${ad.stateuse} ${ad.description}</p>
    <span class="span">${ad.tags}</span>
    <div>
      <button class="delete-button" id="deleteAd">Borrar Anuncio</button>
    </div>
    <div>
      <a class="modifyAd-button" id="btn-modifyAd" href="/modifyAd.html?adId=${ad.id}">
        <label>modificar</label>
      </a>
    </div>
  </div>
</div>
      `;
    }
    //<button class="modifyAd-button" id="btn-modifyAd" >Modificar Anuncio</button>