export function hideSpinner() {
  const spinnerElement = document.querySelector(".spinner")

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        spinnerElement.classList.add("hide")
      )
    }, 1000);
  })
}