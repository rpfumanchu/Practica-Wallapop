export function buildTagButton(tags) {
 
  // const tagButton = document.createElement("div")
  // //tagButton.classList.add("container-button")
  // tagButton.innerHTML = 
  return `
  
    <label class="label"> Selecciona un campo </label>
    <select class="select" name="fields" id="fields">
      <option value="">Elige</option>
      <option value="${tags}">Imagen</option>
      
    </select>
      <input class="pagination-button" type="submit" id="tagButton" value="Tags/>`
  //return tagButton

}