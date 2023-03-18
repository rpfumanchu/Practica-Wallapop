export function pagination(maxPage) {

  const url = window.location.origin + window.location.pathname;
  const params = new URLSearchParams(window.location.search); // URLSearchParams
  const page = parseInt(params.get("page")) || 1;

  if (page > 1) {
    prevButton.addEventListener("click", () => {
      params.set("page", page - 1);
      window.location.href = `${url}?${params.toString()}`;
    });
  } else {
    prevButton.classList.add("hide-button");
  }

  if (page < maxPage) {
    nextButton.addEventListener("click", () => {
      params.set("page", page + 1);
      window.location.href = `${url}?${params.toString()}`;
    });
  } else {
    nextButton.classList.add("hide-button");
  }
}