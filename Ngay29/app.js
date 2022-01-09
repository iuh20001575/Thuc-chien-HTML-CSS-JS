const btns = document.querySelectorAll('.btn');

const playSound = event => {
    const audio = event.target.querySelector('audio');
    const cloneAudio = audio.cloneNode();
    cloneAudio.play();
    setTimeout(() => cloneAudio.volume = 0.8, 400);
    setTimeout(() => cloneAudio.volume = 0.6, 800);
    setTimeout(() => cloneAudio.volume = 0.4, 1200);
    setTimeout(() => cloneAudio.volume = 0.2, 1600);
    setTimeout(() => cloneAudio.volume = 0, 2000);
}

btns.forEach(btn => btn.onclick = playSound);

document.addEventListener('keypress', e => {
    const btn = document.querySelector(`.btn.${e.key}`);
    btn && btn.click();
})