const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.login-register'); 
const btnPopup = document.querySelector('.btnLogin-popup');
const closebtn = document.querySelector('.icon-close');


registerLink.addEventListener
('click', () =>   wrapper.classList.add('active'))

loginLink.addEventListener
('click', () =>   wrapper.classList.remove('active'));


btnPopup.addEventListener
('click', ()=> wrapper.classList.add('active-popup'));


closebtn.addEventListener
('click', ()=> wrapper.classList.remove('active-popup'));


