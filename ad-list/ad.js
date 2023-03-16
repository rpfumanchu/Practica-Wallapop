

//?_page=1&_limit=3
//?tags=motor



 export async function getAd(page, limit = 4) {

   const adUrl = `http://127.0.0.1:8000/api/ads?_page=${page}&_limit=${limit}`;

   const response = await fetch(adUrl);
   const ad = await response.json();
   const count = response.headers.get("X-Total-Count");
   const maxPage = count / limit;
   
   return { ads: ad, total: count, maxPage: maxPage };
  }

  // export async function adFinder() {
  //   const response = await fetch("http://127.0.0.1:8000/api/ads")

  //   const adTotal = await response.json();

  //   return adTotal

  // }

 
  
  //  const body = document.getElementsByTagName("body")[0];

  //  if(page > 1) {
  //   const button = document.createElement("button");
  //   button.innerText = "Página anterior";    
  //   button.addEventListener("click", ev => {
  //     window.location.href = window.location.origin + "?page=" + (page - 1);
  //   });
  //   body.append(button);
  //  }

  //  if(page < maxPage) {
  //   const button = document.createElement("button");
  //   button.innerText = "Página siguiente";
  //   button.addEventListener("click", ev => {
  //     window.location.href = window.location.origin + "?page=" + (page + 1);
  //   });
  //   body.append(button);
  //  }

  

  //  for(let i = 1; i < botones_que_tengo_que_mostrar; i++) {
  //   const button = document.createElement("button");
  //   button.innerText = "Página " + i;
  //   button.addEventListener("click", ev => {
  //     window.location.href = window.location.origin + "?page=" + i;
  //   });
  //   body.append(button);
  //  }