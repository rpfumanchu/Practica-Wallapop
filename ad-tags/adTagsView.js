export function buildTagButton(tag) {

  const tagButton = document.createElement("div")
  tagButton.classList.add("container-button")
  tagButton.innerHTML = `
  
    <label class="label" for="tagButton"> Tags </label>
    
    <a class="ad-link" href="/ad-tags.html?tags=${tag.tags}"> 
    <button id="tagButton" name"tagButton" >${tag.tags}</button>`


  return tagButton

}

    //

    //<input class="pagination-button" type="submit" id="tagButton" name"tagButton" value="${tag.tags}"/>