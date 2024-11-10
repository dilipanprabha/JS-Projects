const btn1 = document.querySelector("#play");
const btn2 = document.querySelector("#restart");
const time = document.querySelector("#timer");
let hours = 0;
let minutes = 0;
let seconds = 0;
let leadingSec = 0;
let leadingMin = 0;
let leadingHou = 0;
let str;
let temp = 0;
let interval;

btn1.addEventListener("click", () => {
    btn1.children[0].classList.toggle("fa-play");
    btn1.children[0].classList.toggle("fa-pause");
    btn1.classList.toggle("btn-success");
    btn1.classList.toggle("btn-warning");
    if (temp != 1) {
        interval = setInterval(() => {
            temp = 1;
            timer();
            time.textContent = str;
        }, 1000);
    } else {
        temp = 0;
        clearInterval(interval);
    }
})

btn2.addEventListener("click", () => {
    if (temp === 1) {
        btn1.children[0].classList.toggle("fa-play");
        btn1.children[0].classList.toggle("fa-pause");
        btn1.classList.toggle("btn-success");
        btn1.classList.toggle("btn-warning");
        temp = 0;
    }
    seconds = 0;
    minutes = 0;
    hours = 0;
    str = `0${hours}:0${minutes}:0${seconds}`;
    time.textContent = str;
    clearInterval(interval);
})

function timer() {
    seconds++
    if (seconds / 60 === 1) {
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
            if (hours / 60 === 1) {
                alert("Maximum time is reached");
                seconds = 0;
                minutes = 0;
                hours = 0;
            }
        }
    }
    if (seconds < 10) leadingSec = `0${seconds}`;
    else leadingSec = seconds;
    if (minutes < 10) leadingMin = `0${minutes}`;
    else leadingMin = minutes;
    if (hours < 10) leadingHou = `0${hours}`;
    else leadingHou = hours;

    str = `${leadingHou}:${leadingMin}:${leadingSec}`;
}