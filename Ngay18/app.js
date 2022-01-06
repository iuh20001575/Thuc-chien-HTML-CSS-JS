const imgElements = $('.img');
const img = $('img');

img.on('dragstart', function() {
    this.classList.add('dragging');
});

img.on('dragend', function() {
    this.classList.remove('dragging');
});

imgElements.on('drop', function() {
    this.appendChild(img[0]);
});

imgElements.on('dragover', function(e) {
    e.preventDefault();
    this.appendChild(img[0]);
});