export function adStatusImage(ad) {
  if (ad.state == true) {
    ad.state = "En venta";

  } else {
    ad.state = "Compro";
  }

  if (ad.img == "") {
    ad.img = "https://www.redeszone.net/app/uploads-redeszone.net/2023/02/listado_errores_http_destacada.jpg";
  }
}