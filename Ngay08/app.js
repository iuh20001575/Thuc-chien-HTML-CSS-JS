const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const submitBtn = $('.submit');
const registerForm = $('#register');

const checkValidator = Validator('#register');

registerForm.onsubmit = e => {
    e.preventDefault();
    checkValidator();
}