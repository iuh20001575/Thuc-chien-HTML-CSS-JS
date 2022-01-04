const inputElement = document.querySelector('.input');
const iconElement = document.querySelector('.icon');
const searchElement = document.querySelector('.search');

iconElement.onclick = () => {
    searchElement.classList.toggle('active');
    if (searchElement.classList.contains('active'))
        inputElement.focus();
}