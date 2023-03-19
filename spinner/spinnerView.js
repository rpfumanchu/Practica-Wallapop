

export function buildSpinnerView(message) {
  return `
<div class="spinner">
  <div class="cargando">
    <div class="pelotas"></div>
    <div class="pelotas"></div>
    <div class="pelotas"></div>
    <span class="texto-cargando">${message}</span>
  </div>
</div>`;
}

// <div class="spinner" ${message}></div>
