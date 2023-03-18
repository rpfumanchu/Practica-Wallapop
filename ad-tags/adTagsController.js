//import { hideSpinner } from "../spinner/spinnerController.js";
import { drawAds } from "../utils/drawAds.js";
import { getAdTags } from "./adTags.js";
import { buildTagButton } from "./adTagsView.js";
import { pagination } from "../utils/pagination.js";

export async function adTags(adTagsElement, adListElement, page, tag) {
  try {

    // adTagsElement.addEventListener("click", () => {
    //   window.location.href = window.location + "?tags=" + tag;
    // });
    
    console.log("tag", tag);
    console.log("page", page);

    const payload = await getAdTags(tag, page);
    console.log("payload", payload);

    pagination(payload.maxPage);

    const onlyTags = payload.tagstotal
      .filter(ad => !!ad.tags)
      .map(ad => ad.tags.split(","))
      .flat();

    console.log("onlyTags", onlyTags);

    const uniqueTagsSet = new Set([...onlyTags]);
    console.log("uniqueTagsSet", uniqueTagsSet);

    const uniqueTagsArray = [...uniqueTagsSet];
    console.log("uniqueTagsArray", uniqueTagsArray);

    // let array = gettotalTags(payloadtag);
   
 
      drawAds(payload, adListElement);
      drawTags(uniqueTagsArray, page, adTagsElement);
    
      //addInputListenerToFilter(adListElement);
      
      //hideSpinner(adTagsElement)
     
    

  } catch (error) {
    console.log(error);
  }

//   function gettotalTags(payloadtag) {
//     let hash = {};
//     let array = payloadtag.tagstotal;
//     array = array.filter(function (current) {
//       let exists = !hash[current.tags];
//       hash[current.tags] = true;
//       //console.log(array)
//       return exists;
//       //drawAds(tagsUnicos, adTagsElement)
//     });
//     // array.forEach((elem) => {
//     //   elem.tags
//     //   const tagsUnicos = elem.tags
//     //   //console.log(tagsUnicos)
//     //   return tagsUnicos
//     //  })
//     return array;
//   }
// }

  function drawTags(tagArray, page, adTagsElement) {
    tagArray.forEach(tag => {
      const newTagElement = buildTagButton(tag, page);
      adTagsElement.appendChild(newTagElement);
    });
  }
}



