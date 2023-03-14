import { buildAdView } from "../ad-list/adView.js";
import { getAdTags } from "./adTags.js";
import { buildTagButton } from "./adTagsView.js";



export async function adTags(adTagsElement, tag) {
  const payloadtag = await getAdTags();
  const payload = await getAdTags(tag)
  let array = gettotalTags(payloadtag)


  //adTagsElement.innerHTML = buildTagButton(tags)
  drawAds(payload, adTagsElement)
  pintar(array, adTagsElement);
  array = (JSON.stringify(array))
  console.log(array)
  //console.log(Object.values(array));

  adTagsElement.addEventListener("click", () => {
  window.location.href = window.location + "?tags=" + (tag);
})




  function gettotalTags(payloadtag) {
    let hash = {}
    let array = payloadtag.tagstotal
    array = array.filter(function (current) {
      let exists = !hash[current.tags]
      hash[current.tags] = true
      //console.log(array)
      return exists
      //drawAds(tagsUnicos, adTagsElement)
    })
    // array.forEach((elem) => {
    //   elem.tags
    //   const tagsUnicos = elem.tags
    //   //console.log(tagsUnicos)
    //   return tagsUnicos
    //  })
    return array
  }

}

function pintar(array, adTagsElement) {
  array.forEach((elem) => {
    elem.tags
    const newTagElement = buildTagButton(elem);
    adTagsElement.appendChild(newTagElement);

  });
}

function drawAds(payload, adTagsElement) {
  payload.ads.forEach((element) => {
    const newAdElement = buildAdView(element);
    adTagsElement.appendChild(newAdElement);
  });
}

// elem.tags
// const tagsUnicos = elem.tags
// tagsUnicos.forEach((elem) => {
//   const newTagElement = buildTagButton(elem)
//   adTagsElement.appendChild(newTagElement)
// })




//tagsUnicos = (JSON.stringify(tagsUnicos))
//  tagsUnicos.forEach((element) => {
//      const newAdElement = buildTagButton(element);
//      adTagsElement.appendChild(newAdElement);
//    });
// array.isArray(tagsUnicos)
//console.log(array)
//adTagsElement.innerHTML = buildTagButton(tagsUnicos)
//console.log(tagsUnicos)
//console.log(JSON.stringify(array))

// array.forEach((elem) => {
  //   elem.tags
  //   //console.log(elem.tags)
  //    tagsUnicos = elem.tags
  //   //tagsUnicos = (JSON.stringify(tagsUnicos))
  //     // tagsUnicos.forEach((element) => {
    //     //     const newAdElement = buildTagButton(element);
    //     //     adTagsElement.appendChild(newAdElement);
    //     //   });
    //     //adTagsElement.innerHTML = buildTagButton(tagsUnicos)
    //   // console.log(tagsUnicos)
    //   return tagsUnicos

    //})
    // function drawAds(tagsUnicos, adTagsElement) {
      //   tagsUnicos.forEach((element) => {
    //     const newAdElement = buildTagButton(element);
    //     adTagsElement.appendChild(newAdElement);
    //   });
    // }