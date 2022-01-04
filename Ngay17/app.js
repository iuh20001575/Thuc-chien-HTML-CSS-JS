const number = $('.number');

(() => {
    Array.from(number).forEach(item => {
        const value = +item.innerText;
        const percent = value/100;
        let count = percent;
        const timerID = setInterval(() => {
            item.innerText = count;
            count += percent;
            if (count > value)
                clearInterval(timerID);
        }, 1);
    })
})();