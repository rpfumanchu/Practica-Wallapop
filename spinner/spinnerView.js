

export function buildSpinnerView() {
  return `
  <div class="spinner">
    <div class="cargando">
      <div class="pelotas"></div>
      <div class="pelotas"></div>
      <div class="pelotas"></div>
      <span class="texto-cargando">Cargando...</span>
    </div>
  </div>
  `;
}

// <div class="spinner" ${message}></div>
