import { adTags } from "./adTagsController.js";



const params = new URLSearchParams(window.location.search);
const tags = params.get("tags") ;


  const adTagsElement = document.querySelector(".tags");
  adTags(adTagsElement, tags);


//const adTagsElement = document.querySelector(".tags")


