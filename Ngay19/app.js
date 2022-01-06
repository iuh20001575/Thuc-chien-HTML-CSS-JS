const canvas = document.querySelector('canvas.draw');
const clearBtn = document.querySelector('.btn.close');
const saveBtn = document.querySelector('.btn.save');
const incBtn = document.querySelector('.btn.inc');
const decBtn = document.querySelector('.btn.dec');
const eraserBtn = document.querySelector('.btn.eraser');
const sizeInput = document.querySelector('.btn.size');
const colorInput = document.querySelector('.btn.color');
const context = canvas.getContext('2d');
let x, y, 
    drawing = false, 
    size = +sizeInput.value, 
    color = colorInput.value,
    isEraser = false;
const minValue = sizeInput.min;
const maxValue = sizeInput.max;

/* Start Eraser Canvas */
eraserBtn.addEventListener('click', () => {
    isEraser = !isEraser;
});
/* End Eraser Canvas */

/* Start Clear Canvas */
clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
/* End Clear Canvas */

/* Start Save Canvas */
saveBtn.addEventListener('click', e => {
    e.target.href = canvas.toDataURL('image/png');
});
/* End Save Canvas */

/* Start Inc Size */
incBtn.addEventListener('click', e => {
    const PrevSize = +sizeInput.value;
    size = PrevSize + 5 <= maxValue ? PrevSize + 5 : maxValue;
    sizeInput.value = size; 
});
/* End Inc Size */

/* Start Dec Size */
decBtn.addEventListener('click', e => {
    const PrevSize = +sizeInput.value;
    size = PrevSize - 5 >= minValue ? PrevSize - 5 : minValue;
    sizeInput.value = size; 
});
/* End Dec Size */

/* Start Change Color */
colorInput.addEventListener('change', e => {
    color = e.target.value;
});
/* End Change Color */

canvas.onmousedown = e => {
    drawing = true;
    x = e.offsetX
	y = e.offsetY
}

canvas.onmouseup = e => {
    drawing = false;
    x = undefined;
    y = undefined;
}

canvas.onmousemove = e => {
    if (drawing) {
        const x2 = e.offsetX
		const y2 = e.offsetY

		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)

		x = x2
		y = y2
    }
}

function drawCircle(x, y) {
	context.beginPath()
	context.arc(x, y, size, 0, Math.PI * 2)
	context.fillStyle = isEraser && '#fff' || color;
	context.fill()
}

function drawLine(x1, y1, x2, y2) {
	context.beginPath()
	context.moveTo(x1, y1)
	context.lineTo(x2, y2)
	context.strokeStyle = isEraser && '#fff' || color;
	context.lineWidth = size * 2
	context.stroke()
}
