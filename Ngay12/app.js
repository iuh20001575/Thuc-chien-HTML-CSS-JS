const range = $('.range');
const rangeBar = $('.range-bar')[0];
const body = $('body')[0];

range.on('mousemove', e => {
    const widthPercent = e.offsetX / range[0].offsetWidth;
    const width = `${Math.round(widthPercent * 100)}%`;
    rangeBar.style.width = width;
    rangeBar.innerHTML = width;
    body.style.backgroundColor = `rgba(0, 0, 0, ${widthPercent})`;
})