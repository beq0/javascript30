const seconds = document.querySelector('.second-hand');
const minutes = document.querySelector('.min-hand');
const hours = document.querySelector('.hour-hand');

const updateTime = () => {
    const time = new Date();
    const currSeconds = time.getSeconds() !== 0 ? time.getSeconds() : 60;
    const currMinutes = time.getMinutes();
    const currHours = time.getHours();
    const secondsRotateAmount = (currSeconds/60)*360 + 90;
    seconds.style.transform = `rotate(${secondsRotateAmount}deg)`;
    const minutesRotateAmount = (currMinutes/60 + currSeconds/3600)*360 + 90;
    minutes.style.transform = `rotate(${minutesRotateAmount}deg)`;
    const hoursRotateAmount = (currHours/12 + currMinutes/3600 + currSeconds/216000)*360 + 90;
    hours.style.transform = `rotate(${hoursRotateAmount}deg)`;
    // console.log(time);
}

setInterval(updateTime, 1000);