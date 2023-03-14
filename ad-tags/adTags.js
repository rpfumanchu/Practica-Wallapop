//&_page=${page}&_limit=${limit}
//, limit = 4
export async function getAdTags(tag) {
  const response = await fetch(`http://127.0.0.1:8000/api/ads?tags=${tag}`);
  const responseTags = await fetch("http://127.0.0.1:8000/api/ads?ads=tags")
  
  const tags = await responseTags.json()
  const ad = await response.json();
  const count = response.headers.get("X-Total-Count");
  //const maxPage = count / limit;

  return { ads: ad, tagstotal: tags };
}
//total: count, maxPage: maxPage,