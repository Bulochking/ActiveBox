const menuButton = document.querySelector(".header__open-menu");
const menu = document.querySelector(".header__menu");

function toggleMenu() {
    menu.classList.toggle("menu-open"); 
    menuButton.classList.toggle("active");	
}

menuButton.addEventListener("click", toggleMenu);
