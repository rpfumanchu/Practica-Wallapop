export function homePage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        window.location = "/"
      );
    }, 1000);
  });
}