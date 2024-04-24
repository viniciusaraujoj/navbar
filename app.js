const btn = document.querySelector(".menu");
const links = document.querySelector(".links");

btn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
