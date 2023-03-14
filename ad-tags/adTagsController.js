import { getAdTags } from "./adTags.js";
import { buildTagButton } from "./adTagsView.js";


export async function adTags(adTagsElement,tag) {
  gettotalTags()
  const payload = await getAdTags(tag)
  
  
  async function gettotalTags(tagsUnicos) {
    const payloadtag = await getAdTags();
    let hash = {}
    let array = payloadtag.tagstotal
    array = array.filter(function (current) {
      let exists = !hash[current.tags]
      hash[current.tags] = true
      return exists
      //drawAds(tagsUnicos, adTagsElement)
    })
    //console.log(JSON.stringify(array))
    
    array.forEach((elem) => {
      elem.tags
      //console.log(elem.tags)
       tagsUnicos = elem.tags
      //tagsUnicos = (JSON.stringify(tagsUnicos))
        // tagsUnicos.forEach((element) => {
        //     const newAdElement = buildTagButton(element);
        //     adTagsElement.appendChild(newAdElement);
        //   });
        //adTagsElement.innerHTML = buildTagButton(tagsUnicos)
      console.log(tagsUnicos)
      return tagsUnicos

    })
  }

}

// function drawAds(tagsUnicos, adTagsElement) {
//   tagsUnicos.forEach((element) => {
//     const newAdElement = buildTagButton(element);
//     adTagsElement.appendChild(newAdElement);
//   });
// }