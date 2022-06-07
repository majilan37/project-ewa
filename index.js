const header = document.querySelector(".header__content");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    header.classList.add("header__content--scrolled");
  } else {
    header.classList.remove("header__content--scrolled");
  }
});
