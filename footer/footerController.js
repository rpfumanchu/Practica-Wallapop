import { buildFooter } from "./footerView.js";


export function footerController(footerElement) {

  footerElement.innerHTML = buildFooter()

}