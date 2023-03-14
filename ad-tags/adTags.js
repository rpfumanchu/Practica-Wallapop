//&_page=${page}&_limit=${limit}

export async function getAdTags(page, limit = 4, tag) {
  const response = await fetch(`http://127.0.0.1:8000/api/ads?tags=${tag}`);
  const responseTags = await fetch("http://127.0.0.1:8000/api/ads?ads=tags")
  
  const tags = await responseTags.json()
  const ad = await response.json();
  const count = response.headers.get("X-Total-Count");
  const maxPage = count / limit;

  return { ads: ad, total: count, maxPage: maxPage,tagstotal: tags };
}