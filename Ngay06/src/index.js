const notification = $('.notification')[0];
const handle = $('.handle')[0];
const value = $('.value');
const values = ['key', 'location', 'which', 'code'];

$('body').keydown(e => {
    [...value].forEach((item, index) => {
        item.innerHTML = e.originalEvent[values[index]];
    });
    notification.style.display = 'none';
    handle.style.display = 'block';
});

