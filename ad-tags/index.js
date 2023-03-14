import { adTags } from "./adTagsController.js";



const params = new URLSearchParams(window.location.search);
const tags = parseInt(params.get("tags")) || 1;

if (!tags) {
  window.location = "/"
} else {
  const adTagsElement = document.querySelector(".tags");
  adTags(adTagsElement, tags);

}
//const adTagsElement = document.querySelector(".tags")


