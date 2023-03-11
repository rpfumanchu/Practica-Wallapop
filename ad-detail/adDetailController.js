import { pubSub } from "../pubSub.js";
import { getAdDetail } from "./adDetail.js"
import { buildAdDetail } from "./adDetailView.js";

export const adDetailController = async (adDetailElement, adId) => {

  try {
    const ad = await getAdDetail(adId)
    adDetailElement.innerHTML = buildAdDetail(ad)
    //console.log(ad)
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
      isError: true,
      message: error.message,
    });
  }

}