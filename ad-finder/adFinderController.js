import { adFinder } from "./adFinder.js";
import { drawList } from "./adFinderView.js";

//DONE buscador por letras que incluya los anuncios
export async function adFindController(adFindElement, adListElement, paginationButtonElement) {
  try {
    const adTotal = await adFinder();

    drawList(adFindElement, adTotal);
    addInputListenerToFilter();
    
  } catch (error) {
    
  }
 


  function addInputListenerToFilter() {
    adFindElement.querySelector("#filter_list_ad").addEventListener("input", (event) => {
      
      const text = event.target.value.toLowerCase();
  
      if(!!text) {
        adListElement.classList.add("hide");
        paginationButtonElement.classList.add("hide");
      } else {
        adListElement.classList.remove("hide");
        paginationButtonElement.classList.remove("hide");
      }

      //NOTE filtrando los elementos
      adFindElement.querySelectorAll(".finder-item").forEach((elem) => {
        elem.classList.add("hide");
  
        //NOTE si no hay texto lo oculto y no muestro anuncios
        if (!text) {
            elem.classList.add("hide");
            
            //elem.classList.remove("hide");
        } else {

            

            const name = elem.dataset.name;
  
          //NOTE si el texto se incluye en el contenido lo muestro
          if (name.includes(text)) {
            elem.classList.remove("hide");
          }
        }
      });
    });
  }
}


