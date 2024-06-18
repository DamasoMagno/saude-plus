const header = document.querySelector("header");
const open_menu = document.querySelector("button.open_menu");
const close_menu = document.querySelector("button.close_menu");
const headerChildren = header.querySelector("div");

function changeHeaderStyles() {
  this.scrollY
    ? header.classList.add("floatHeader")
    : header.classList.remove("floatHeader");
}

function removeHeaderMobile(){
  this.innerWidth >= 728
  ? headerChildren.classList.remove("menu_mobile")
  : headerChildren.classList.remove("menu_mobile");
}

window.addEventListener("scroll", changeHeaderStyles);
window.addEventListener("resize", removeHeaderMobile);

open_menu.addEventListener("click", () => {
  headerChildren.classList.add("menu_mobile");
});

close_menu.addEventListener("click", () => {
  headerChildren.classList.remove("menu_mobile");
});
