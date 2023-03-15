export function pagination(page, payload) {
  if (page > 1) {
    prewButton.addEventListener("click", () => {
      window.location.href = window.location.origin + "?page=" + (page - 1);
    });

  } else {
    prewButton.classList.add("hide-button");
  }

  if (page < payload.maxPage) {
    nextButton.addEventListener("click", () => {
      window.location.href = window.location.origin + "?page=" + (page + 1);
    });

  } else {
    nextButton.classList.add("hide-button");
  }
}