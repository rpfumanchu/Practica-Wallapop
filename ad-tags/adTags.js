//&_page=${page}&_limit=${limit}
//, limit = 4
export async function getAdTags(tag, page, limit = 2) {
  const responseFilteredAds = await fetch(`http://127.0.0.1:8000/api/ads?tags=${tag}&_page=${page}&_limit=${limit}`);
  const filteredAds = await responseFilteredAds.json();

  const responseAllAds = await fetch("http://127.0.0.1:8000/api/ads")
  const allAds = await responseAllAds.json()

  const count = responseFilteredAds.headers.get("X-Total-Count");
  const maxPage = count / limit;

  return { ads: filteredAds, tagstotal: allAds, total: count, maxPage: maxPage };
}
//total: count, maxPage: maxPage,

