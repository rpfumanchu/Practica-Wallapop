import { buildSpinnerView } from "./spinnerView.js";

export function spinnerController(spinnerElement) {
  spinnerElement.innerHTML = buildSpinnerView("Cargando...");
}

export function showSpinner(spinnerElement) {
  spinnerElement.classList.remove("hide");
}

export function hideSpinner(spinnerElement) {
  setTimeout(() => {
    spinnerElement.classList.add("hide");
  }, 700);
}
