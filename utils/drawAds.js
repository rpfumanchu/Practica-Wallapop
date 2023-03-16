import { buildAdView } from "../ad-list/adView.js";

export function drawAds(payload, adTagsElement) {
  payload.ads.forEach((element) => {
    const newAdElement = buildAdView(element);
    adTagsElement.appendChild(newAdElement);
  });
}