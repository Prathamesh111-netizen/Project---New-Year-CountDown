const currentyear = new Date().getFullYear();
console.log(currentyear);

const nextyear = document.getElementById("year");
nextyear.innerHTML = currentyear + 1;

// const currentDay = new Date().getDate();
// const currentHours = new Date().getHours();
// const currentMinutes = new Date().getMinutes();
// const currentSeconds = new Date().getSeconds();

const Hours = document.getElementById("hours");
const Day = document.getElementById("days");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const timedetails = document.getElementById("time-details");
const loading = document.getElementById('loading');

const nextYeartime = new Date(currentyear + 1, 0, 1, 0, 0, 0);
// console.log(nextYeartime);

// console.log(currenttime);
// console.log(diff);


function updateCountdown () {
    const currenttime = new Date();
    const diff = nextYeartime - currenttime;

const d = Math.floor(diff / 1000 / 60 / 60 / 24);
const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
const m = Math.floor(diff / 1000 / 60) % 60 ;
const s = Math.floor(diff / 1000) % 60;


Day.innerHTML = d < 10 ? '0' + d : d  ;
Hours.innerHTML = h < 10 ? '0' + h : h;
Minutes.innerHTML = m < 10 ? '0' + m : m ;
Seconds.innerHTML  = s < 10 ? '0' + s : s ;
}
setTimeout(() => {
    loading.remove();
    timedetails.style.display = 'flex';
  }, 1);
  
  // Run every second
  setInterval(updateCountdown, 1);