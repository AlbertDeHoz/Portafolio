//toggle mobile menu
const burgerIcon = document.getElementById('burger-icon');
const navBarMenu = document.getElementById('nav-links');

const btnEmailForm = document.getElementById('email-btn');
const emailContainer = document.getElementById('email-container');


burgerIcon.onclick = e => {
    e.preventDefault();
    navBarMenu.classList.toggle('is-active');
}

btnEmailForm.onclick = e => {
    e.preventDefault();
    emailContainer.classList.toggle('is-active');
}