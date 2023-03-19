export function buildTagButton(tag, page) {

  const tagButton = document.createElement("div")
  tagButton.classList.add("tags")
  tagButton.innerHTML = `
  <label class="label" for="tagButton"></label>
  <div>
    <a class="ad-link" href="/ad-tags.html?tags=${tag}&page=${page}">
      <button class="tags-button" id="tagButton" name"tagButton">${tag}</button>
    </a>
  </div>
  
  `
    
  return tagButton

}

