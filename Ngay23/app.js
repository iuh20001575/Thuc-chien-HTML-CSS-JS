const imgsItem = document.querySelectorAll('.img-item');
const zoomsItem = document.querySelectorAll('.zoom-img');

imgsItem.forEach((imgItem, index) => {
    const width = imgItem.offsetWidth;
    const height = imgItem.offsetHeight;

    imgItem.onmousemove = e => {
        const positionX = e.offsetX/width * 100;
        const positionY = e.offsetY/height * 100;

        zoomsItem[index].classList.remove('hide');
        zoomsItem[index].style = 
            `
                background-image: url(${imgItem.querySelector('img').src}); 
                top: ${e.offsetY}px; 
                left: ${e.offsetX}px;
                background-position: ${positionX}% ${positionY}%;
            `;
    }

    imgItem.onmouseleave = () => {
        zoomsItem[index].classList.add('hide');
    }
})