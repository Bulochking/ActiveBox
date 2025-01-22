const banner = document.querySelector(".banner");
const menuButton = document.querySelector(".header__open-menu");

function toggleMenu() {
    banner.classList.toggle("menu-open"); 	
}

menuButton.addEventListener("click", toggleMenu);
