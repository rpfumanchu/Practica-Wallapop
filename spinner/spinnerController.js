import { buildSpinnerView } from "./spinnerView.js";

export function spinnerController(spinnerElement) {
  spinnerElement.innerHTML = buildSpinnerView();
  
}

export function hideSpinner(spinnerElement) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(spinnerElement.classList.add("hide"));
    }, 700);
  });
}
