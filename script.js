const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 10) {
    header.classList.add("headerActive");
  } else {
    header.classList.remove("headerActive");
  }
});
