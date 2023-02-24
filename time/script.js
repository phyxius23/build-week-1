const semicircles = document.querySelectorAll('.semicircle');


const hr = 0;
const min = 0;
const sec = 10;

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const starTime = Date.now();
const futureTime = starTime + setTime;



const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;

    if (angle > 180) {
        semicircles[2].style.display = 'none';
        semicircles[0].style.transform = 'rotate(180deg)';
        semicircles[1].style.transform = `rotate (${angle}deg)`;
    } else {
        semicircles[2].style.display = 'block';
        semicircles[0].style.transform = `rotate (${angle}deg)`;
        semicircles[1].style.transform = `rotate (${angle}deg)`;
    }


    if (remainingTime < 0) {
        clearInterval(timerLoop);
    }
}