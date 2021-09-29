//toggle mobile menu
'use strict'

const burgerIcon = document.getElementById('burger-icon');
const navBarMenu = document.getElementById('nav-links');

const btnEmailForm = document.getElementById('email-btn');
const emailContainer = document.getElementById('email-container');

const emailForm = document.getElementById('email-form');
burgerIcon.onclick = e => {
    e.preventDefault();
    navBarMenu.classList.toggle('is-active');
}

btnEmailForm.onclick = e => {
    e.preventDefault();
    emailContainer.classList.toggle('is-active');
}

// emailForm.onsubmit = e => {
//     e.preventDefault();
//     submitForm();
//     console.log(e.target)
    
// }

// const submitForm = async () => {
//     await console.log('hello')
// }
