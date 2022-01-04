const img = document.querySelector('.img');
const imgInput = document.querySelector('#input-img');

imgInput.onchange = e => {
    const file = e.target.files[0];
    if (file) {
        img.src = URL.createObjectURL(e.target.files[0]);
        img.style.display = 'block';
    }

}