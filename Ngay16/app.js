const scroll = Array.from($('.scroll'));
const vHeight = (window.innerHeight || document.documentElement.clientHeight);

const checkShowOnScroll = (element) => {
    const { top, bottom } = element.getBoundingClientRect();

    return (
        (top >= 0 || bottom >= 0) &&
        top <= vHeight
    );
}

const handleScroll = () => {
    scroll.forEach(element => 
        element.classList.toggle('start', checkShowOnScroll(element)))
}

handleScroll();
window.onscroll = handleScroll;