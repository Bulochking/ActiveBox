const banner = document.querySelector(".banner");
const menuButton = document.querySelector(".header__open-menu");

function toggleMenu() {
    banner.classList.toggle("menu-open");
    menuButton.classList.toggle("active");	
}

menuButton.addEventListener("click", toggleMenu);
