const writing = document.querySelector('.writing');
const typing = document.querySelector('.typing');
const length = typing.innerText.length;
const width = writing.offsetWidth;

typing.style = `--length: ${length}`;
writing.style.width = `${width}px`;