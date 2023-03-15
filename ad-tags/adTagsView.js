export function buildTagButton(tag) {

  const tagButton = document.createElement("div")
  tagButton.classList.add("tags")
  tagButton.innerHTML = `
  
    <label class="label" for="tagButton"> Tags </label>
    <div>
    <a class="ad-link" href="/ad-tags.html?tags=${tag.tags}">
    <button class="tags-button" id="tagButton" name"tagButton" >${tag.tags}</button>
    </a> 
    </div>`
    


  return tagButton

}

    //

    //<input class="pagination-button" type="submit" id="tagButton" name"tagButton" value="${tag.tags}"/>