import { adFinder } from "./adFinder.js";
import { drawList } from "./adFinderView.js";

//DONE buscador por letras que incluya los anuncios
export async function adFindController(adFindElement) {
  try {
    const adTotal = await adFinder();

    drawList(adFindElement, adTotal);
    addInputListenerToFilter();
    
  } catch (error) {
    
  }
 


  function addInputListenerToFilter() {
    adFindElement.querySelector("#filter_list_ad").addEventListener("input", (event) => {
      const text = event.target.value.toLowerCase();
  
      //NOTE filtrando los elementos
      adFindElement.querySelectorAll("#li").forEach((elem) => {
        elem.classList.add("hide");
  
        //NOTE si no hay texto lo oculto y no muestro anuncios
        if (!text) {
            elem.classList.add("hide");
            //elem.classList.remove("hide");
        } else {
            const content = elem.dataset.content;
  
          //NOTE si el texto se incluye en el contenido lo muestro
          if (content.includes(text)) {
            elem.classList.remove("hide");
          }
        }
      });
    });
  }
}


