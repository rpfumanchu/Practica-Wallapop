import { hideSpinner, showSpinner } from "../spinner/spinnerController.js";
import { drawAds } from "../utils/drawAds.js";
import { getAdTags } from "./adTags.js";
import { buildTagButton } from "./adTagsView.js";
import { pagination } from "../utils/pagination.js";
import { notification } from "../utils/notifications.js";

export async function adTags(
  adTagsElement,
  adListElement,
  spinnerElement,
  page,
  tag
) {
  
  showSpinner(spinnerElement);

  try {
    const payload = await getAdTags(tag, page);

    pagination(payload.maxPage);

    const onlyTags = payload.tagstotal.filter((ad) => !!ad.tags).map((ad) => ad.tags.split(",")).flat();

    const uniqueTagsSet = new Set([...onlyTags]);
    const uniqueTagsArray = [...uniqueTagsSet];

    drawTags(uniqueTagsArray, page, adTagsElement);
    drawAds(payload, adListElement);

    notification(false,"Los anuncios clasificados por tags se cargaron correctamente");
  } catch (error) {
    notification(true, "Error cargando los anuncios clasificados por tags");
  } finally {
    hideSpinner(spinnerElement);
  }

  //NOTE para pintar los distintos tags dinamicamente
  function drawTags(tagArray, page, adTagsElement) {
    tagArray.forEach((tag) => {
      const newTagElement = buildTagButton(tag, page);
      adTagsElement.appendChild(newTagElement);
    });
  }
}
