//DONE necesito poder pasar en la url pa página por donde voy
//NOTE MI LIMITE TIENE QUE SER FIJO A 4 PARA QUE NO ME ROMPA EL GRID QUE TENGO DE 4 COLUMNAS

 export async function getAd(page, limit = 4) {

   const adUrl = `http://127.0.0.1:8000/api/ads?_page=${page}&_limit=${limit}`;

   const response = await fetch(adUrl);
   const ad = await response.json();
   const count = response.headers.get("X-Total-Count");
   const maxPage = count / limit;
   
   return { ads: ad, total: count, maxPage: maxPage };
  }

  