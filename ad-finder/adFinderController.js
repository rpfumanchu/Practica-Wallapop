import { adFinder } from "./adFinder.js";
import { drawList } from "./adFinderView.js";

//DONE buscador por letras que incluya los anuncios
export async function adFindController(adFindElement) {
  const adTotal = await adFinder();

  drawList(adFindElement, adTotal);
  addInputListenerToFilter(adFindElement);
}


function addInputListenerToFilter(adFindElement) {
  adFindElement.querySelector("#filter_list_ad").addEventListener("input", (event) => {
    const text = event.target.value.toLowerCase();

    //NOTE filtrando los elementos
    adFindElement.querySelectorAll("li").forEach((elemen) => {

      //NOTE si no hay texto lo oculto y no muestro anuncios
      if (!text) {
          elemen.classList.add("hide");
          //el.classList.remove("hide");
      } else {
          const content = elemen.dataset.content;

        //NOTE si el texto se incluye en el contenido lo muestro
        if (content.includes(text)) {
            elemen.classList.remove("hide");
        }
      }
    });
  });
}
