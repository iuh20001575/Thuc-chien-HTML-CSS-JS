const scrollElement = document.querySelector('.wrapper');

let isMouseDown = false;
let start;

scrollElement.onmousedown = e => {
    isMouseDown = true;
    start = e.pageX;
}

scrollElement.onmouseup = () => {
    isMouseDown = false;
}

scrollElement.onmouseleave = () => {
    isMouseDown = false;
}

scrollElement.onmousemove = e => {
    if (isMouseDown) {
        console.log(e.pageX, start);
        console.log(scrollElement.scrollLeft);
        scrollElement.scrollLeft -= (e.pageX - start) * 3;
        start = e.pageX;
    }
}