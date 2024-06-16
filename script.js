const header = document.querySelector("header");
const button = document.querySelector("button")

window.addEventListener("scroll", () => {
  if (this.scrollY >= 10) {
    header.classList.add("floatHeader");
  } else {
    header.classList.remove("floatHeader");
  }
});

button.addEventListener("click", () => {
  header.classList.toggle("mobile_menu")
})
