var elModalOpenButton = document.querySelector(".navbar__btn");
var elModalOpenlink = document.querySelector(".navbar");
elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("navbar--active");
  elModalOpenButton.classList.toggle("active--btn");
  elModalOpenlink.classList.toggle("navbar--active");
  elModalOpenButton.classList.toggle("active--btn");
});
