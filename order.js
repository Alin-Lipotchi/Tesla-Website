// Hamburger 

const overlay = document.querySelector(".overlay");
const sideMenu = document.querySelector(".side-menu");
const hamburger = document.querySelector(".hamburger");
const xBtn = document.querySelector(".x-btn");

const showMenu = (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    sideMenu.style.display = "block";
}

const closeMenu = (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    sideMenu.style.display = "none";
}

hamburger.addEventListener("click", showMenu);
xBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);