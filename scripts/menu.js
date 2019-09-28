const menuImage = document.querySelector(".header__mobile_image");
const iconClose = document.querySelector(".header__close_image");
const headerContainer = document.querySelector(".header__container");

menuImage.addEventListener("click", function () {
    headerContainer.classList.remove("header__container_hide");
})

iconClose.addEventListener("click", function () {
    headerContainer.classList.add("header__container_hide");
})