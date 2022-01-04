const imgs = $('.wapper');
const modal = $('.modal')[0];
const modalClose = $('.modal__close');
const left = $('.modal__left');
const right = $('.modal__right');
const modalImg = $('.modal__img img')[0];
var index;

const handleElement = (...args) => 
    args.forEach(([element, styleDisplay]) => 
        element.style.display = styleDisplay);

const handleArrow = index => {
    if (index === 1)
        handleElement([left[0], 'none'], [right[0], 'block']);
    else if (index === 8)
        handleElement([right[0], 'none'], [left[0], 'block']);
    else
        handleElement([right[0], 'block'], [left[0], 'block']);
}

imgs.click(function() {
    modal.classList.add('active');
    index = +$(this).data('index');
    handleArrow(index);
    modalImg
        .setAttribute('src', `./assets/img/img${index}.jpeg`);
});

modalClose.click(() => modal.classList.remove('active'));
right.click(() => {
    handleArrow(++index);
    modalImg.setAttribute('src', `./assets/img/img${index}.jpeg`);
});
left.click(() => {
    handleArrow(--index);
    modalImg.setAttribute('src', `./assets/img/img${index}.jpeg`);
});