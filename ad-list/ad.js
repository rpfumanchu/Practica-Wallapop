

//?_page=1&_limit=3
//?tags=motor

 export async function getAd() {
   const adUrl = "http://127.0.0.1:8000/api/ads"

   const response = await fetch(adUrl);
   const ad = await response.json();

   return ad
 }
