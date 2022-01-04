const itemSlider3 = $('.slider-3 .item');
const itemSlider2 = $('.slider-2 .item');
const itemSlider1 = $('.slider-1 .item *');



const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 970)
        itemSlider3.addClass('start');
    if (scrollY < 820)
        itemSlider3.removeClass('start');

    if (scrollY >= 250 && scrollY <= 1000)
        itemSlider2.addClass('start');
    else
        itemSlider2.removeClass('start');

    if (scrollY <= 400)
        itemSlider1.addClass('start');
    else
        itemSlider1.removeClass('start');
}

window.addEventListener('scroll', handleScroll);

handleScroll();