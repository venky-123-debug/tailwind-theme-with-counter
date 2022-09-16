const countDownEndDate = "September 30, 2022 02:00:00";
    
const endDate = new Date(countDownEndDate).getTime();

const x = setInterval(function() {

  const timeNow = new Date().getTime();

  const timeLeft = endDate - timeNow;

  const days    = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if(days < 10) {
    days = "0" + days;
  }

  if(hours < 10) {
    hours = "0" + hours;
  }

  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  if(seconds < 10) {
    seconds = "0" + seconds;
  }

  if (timeLeft > 0) {
    document.getElementById("cdD").innerHTML = days;
    document.getElementById("cdH").innerHTML = hours;
    document.getElementById("cdM").innerHTML = minutes;
    document.getElementById("cdS").innerHTML = seconds;
  }
}, 1000);