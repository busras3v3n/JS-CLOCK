document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateClock, 1000); // Update the clock every second (1000 milliseconds)
});

function updateClock() {
  let hrs = document.querySelector("#hrs");
  let min = document.querySelector("#min");
  let sec = document.querySelector("#sec");

  let date = new Date();

  hrs.textContent = addLeadingZero(date.getHours());
  min.textContent = addLeadingZero(date.getMinutes());
  sec.textContent = addLeadingZero(date.getSeconds());
}

function addLeadingZero(digits) {
  return digits < 10 ? "0" + digits : digits;
}
