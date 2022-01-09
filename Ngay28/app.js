const img = document.querySelector('.img');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const btn = document.querySelector('.btn');

setTimeout(() => {
    img.classList.remove('loading');
    title.classList.remove('loading');
    description.classList.remove('loading');
    btn.classList.remove('loading');

    img.innerHTML = `<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="">`;
    title.innerHTML = `Nodemy`;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis`;
    btn.innerHTML = `Read More`;
}, 4000);