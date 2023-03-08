import { hideSpinner } from "../spinner/spinnerController.js";
import { buildSpinnerView } from "../spinner/spinnerView.js";
import { getAd } from "./ad.js";
import { buildAdView } from "./adView.js";



export async function adListController(adListElement) {
  adListElement.inneHrTML = buildSpinnerView()

  let ads = []

  try {
    ads = await getAd()

    sendCustomEvent({isError: false, message: "los anincios se cargaron correctamente"}, adListElement)

    drawAds(ads,adListElement);
    hideSpinner()

   

  } catch (error) {

  }
}

function drawAds(ads,adListElement) {
  ads.forEach(element => {
    const newAdElement = buildAdView(element);
    adListElement.appendChild(newAdElement);
  });
}

function sendCustomEvent(message, adListElement){
  const event = new CustomEvent("newNotification", {
    detail: {
      message: message
    }
  })
  adListElement.dispatchEvent(event)
}