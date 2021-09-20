//toggle mobile menu
const burgerIcon = document.getElementById('burger-icon');
const navBarMenu = document.getElementById('nav-links');

burgerIcon.onclick = e => {
    e.preventDefault();
    navBarMenu.classList.toggle('is-active');
}
