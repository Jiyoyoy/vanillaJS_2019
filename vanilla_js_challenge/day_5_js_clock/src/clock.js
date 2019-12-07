const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const xmasDay = new Date("2019-12-24:00:00:00+0900z");
  const NINE_HOURS_MILLISECONDS = 32400000;
  const date = new Date();
  const xmasDayKorea = new Date(xmasDay + NINE_HOURS_MILLISECONDS);
  const timeLeft = new Date(xmasDayKorea - date);

  const day = timeLeft.getDate();
  const hours = timeLeft.getHours();
  const minutes = timeLeft.getMinutes();
  const seconds = timeLeft.getSeconds();

  



  clockTitle.innerText = `${day}d ${
    hours < 10 ? `0${hours}`: hours}h ${
    minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime,1000);
}

init();
