const imgList = $('.img-item');
const slider = $('.slider')[0];
const leftBtn = $('.icon.left');
const rightBtn = $('.icon.right');

let index = 1;

imgList.on('click', function() {
    imgList[index-1].classList.remove('active');
    this.classList.add('active');
    slider.src = $('.img-item.active img')[0].src;
    index = $(this).data('index');
});

leftBtn.on('click', () => {
    imgList[index-1].classList.remove('active');
    if (--index <= 0)
        index = 9;
    slider.src = `./assets/img/img${index}.jpeg`;
    imgList[index-1].classList.add('active');
});

rightBtn.on('click', () => {
    imgList[index-1].classList.remove('active');
    if (++index >= 10)
        index = 1;
    slider.src = `./assets/img/img${index}.jpeg`;
    imgList[index-1].classList.add('active');
});