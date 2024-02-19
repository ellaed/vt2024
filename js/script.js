// Denna fil skall innehålla JavaScript (JS)
const hamburger = document.querySelector("#meny");
const nav = document.querySelector("nav");

meny.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle("active");
}