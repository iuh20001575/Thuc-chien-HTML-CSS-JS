const container = document.querySelector('.container');

const columns = 20;
const rows = 10;

container.style = `
    grid-template-columns: repeat(${columns}, 40px);
    grid-template-rows: repeat(${rows}, 40px);
`;

for (let i = 0; i < columns*rows; i++) {
    const element = document.createElement('div');
    element.classList.add('item');
    container.appendChild(element)
}

const items = document.querySelectorAll('.item');

const getColor = () => {
    let hexColor = '#';
    const s = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++)
        hexColor += s[Math.floor(Math.random()*16)];
    return hexColor;
}

items.forEach(item => {
    item.onmouseover = () => {
        const color  = getColor();
        item.style = `
            background-color: ${color};
            box-shadow: 0 0 10px ${color}, 
                0 0 100px ${color};
        `;
    }
    item.onmouseout = () => {
        item.style = `
            background-color: #1d1d1d;
            box-shadow: unset;
        `;
    }
})