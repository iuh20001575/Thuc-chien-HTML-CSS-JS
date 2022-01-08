const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const videoElement = $('.video');
const controlElement = $('.control');
const containerElement = $('.container');
const controlSongElement = $('.play-pause');
const currentTimeElement = $('.current-time');
const timeSongElement = $('.time-song');
const prevSongBtn = $('.control-time.left');
const nextSongBtn = $('.control-time.right');
const mutedElement = $('.muted');
const volumeBtn = $('.volume');
const rangeTime = $('.played');
const rangeElement = $('.range');

let isPlaying = false;
let isMuted = false;    
let volume = 50;
let timeSong;
const widthRange = rangeElement.clientWidth;

const startSong = e => {
    if (isPlaying)
        videoElement.pause();
    else
        videoElement.play();
        isPlaying = !isPlaying;
        controlSongElement.classList.toggle('playing', isPlaying);
    e.stopPropagation();
}

const formatTimeSong = time => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
}

volumeBtn.volume = volume;

videoElement.onclick = startSong;

controlSongElement.onclick = startSong;

videoElement.ontimeupdate = e => {
    const currentTime = videoElement.currentTime;
    rangeTime.style.width = `${currentTime / timeSong * 100}%`;
    currentTimeElement.innerText = formatTimeSong(currentTime);
}

videoElement.ondurationchange = e => {
    timeSong = e.target.duration;
    timeSongElement.innerText = formatTimeSong(timeSong);
}

rangeElement.onclick = e => {
    const percent = e.offsetX / widthRange;
    videoElement.currentTime = Math.round(percent * timeSong);
    rangeTime.style.width = `${percent  * 100}%`;
}

prevSongBtn.onclick = () => videoElement.currentTime -= 10;
nextSongBtn.onclick = () => videoElement.currentTime += 10;

mutedElement.onclick = () => {
    isMuted = !isMuted;
    volumeBtn.value = isMuted ? 0 : volume;
    mutedElement.classList.toggle('muting', isMuted);
    videoElement.muted = isMuted;
}

volumeBtn.onchange = e => {
    volume = e.target.value;
    videoElement.volume = volume/100;
}