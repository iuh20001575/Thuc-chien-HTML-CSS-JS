const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const province = $('.province');
const title = $('.title');
const dateTime = $('.date-time');
const temperature = $('.temperature span');
const statusWeather = $('.title.status');
const detail = $$('.detail-item .info span');
const body = $('body');
const app = $('.app');

const getWeather = province => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${province}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`)
        .then(response => response.json())
        .then(data => data.cod === 200 ? setWeatherToHTML(data) : getWeather('Hà Nội'));
};

const setWeatherToHTML = data => {
    const dateTimeNow = new Date();
    title.innerHTML = `${data.name} , ${data.sys.country}`;
    dateTime.innerHTML = `${dateTimeNow.toLocaleTimeString()}, ${dateTimeNow.toLocaleDateString()}`;
    const feelsLike = Math.floor(data.main.feels_like);
    temperature.innerHTML = feelsLike;
    statusWeather.innerHTML = data.weather[0].main;
    detail[0].innerHTML = data.visibility;
    detail[1].innerHTML = data.wind.speed;
    detail[2].innerHTML = data.clouds.all;
    const nameImage = feelsLike >= 18 ? 'hot' : 'cold';
    body.style.backgroundImage = `url(./${nameImage}.png)`
    app.style.backgroundImage = `url(./${nameImage}.png)`
};

getWeather('hà nội');

province.onkeypress = e => {
    if (e.keyCode === 13)
        getWeather(e.target.value);
}