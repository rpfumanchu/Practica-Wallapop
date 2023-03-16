//import { hideSpinner } from "../spinner/spinnerController.js";
import { drawAds } from "../utils/drawAds.js";
import { getAdTags } from "./adTags.js";
import { buildTagButton } from "./adTagsView.js";


export async function adTags(adTagsElement, tag) {
  try {
    adTagsElement.addEventListener("click", () => {
      window.location.href = window.location + "?tags=" + tag;
    });
    const payloadtag = await getAdTags();
    const payload = await getAdTags(tag);
    let array = gettotalTags(payloadtag);
   
 
      drawAds(payload, adTagsElement);
      pintar(array, adTagsElement);
    
      //addInputListenerToFilter(adListElement);
      
      //hideSpinner(adTagsElement)
     
    

  } catch (error) {

  }

  function gettotalTags(payloadtag) {
    let hash = {};
    let array = payloadtag.tagstotal;
    array = array.filter(function (current) {
      let exists = !hash[current.tags];
      hash[current.tags] = true;
      //console.log(array)
      return exists;
      //drawAds(tagsUnicos, adTagsElement)
    });
    // array.forEach((elem) => {
    //   elem.tags
    //   const tagsUnicos = elem.tags
    //   //console.log(tagsUnicos)
    //   return tagsUnicos
    //  })
    return array;
  }
}

function pintar(array, adTagsElement) {
  array.forEach((elem) => {
    elem.tags;
    const newTagElement = buildTagButton(elem);
    adTagsElement.appendChild(newTagElement);
  });
}



