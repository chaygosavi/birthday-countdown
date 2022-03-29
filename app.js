const month = document.querySelector(".month h1");
const day = document.querySelector(".day h1");
const hourss = document.querySelector(".hours h1");
const mins = document.querySelector(".mins h1");
const secs = document.querySelector(".secs h1");

function countdowm() {
  const expectedDate = new Date("April 5, 2022 00:00:00").getTime();
  const currentDate = new Date().getTime();

  const distance = expectedDate - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  month.innerHTML = formatTime(months);
  day.innerHTML = formatTime(days);
  hourss.innerHTML = formatTime(hours);
  mins.innerHTML = formatTime(minutes);
  secs.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdowm, 1000);
