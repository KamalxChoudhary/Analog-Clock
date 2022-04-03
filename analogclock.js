
let second = 0;
let minute = 0;
let hour = 0;
let time = new Date();

setInterval(
  function() {
time = new Date();
second = time.getSeconds() * 6;
minute = time.getMinutes() * 6;
hour = time.getHours() * 30 + Math.round(minute / 12);
document.getElementById('second-hand').style.transform = "rotate(" + second + "deg)";
document.getElementById('minute-hand').style.transform = "rotate(" + minute + "deg)";
document.getElementById('hour-hand').style.transform = "rotate(" + hour + "deg)";
  }, 1000

);
