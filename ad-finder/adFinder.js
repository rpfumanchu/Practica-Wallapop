export async function adFinder() {
  const response = await fetch("http://127.0.0.1:8000/api/ads")

  const adTotal = await response.json();

  return adTotal

}