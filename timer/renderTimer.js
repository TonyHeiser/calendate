const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const setBtn = document.querySelector(".set-time__btn");
const getMinutes = document.querySelector(".input-minutes");
const getSeconds = document.querySelector(".input-seconds");
const timeIsUp = document.querySelector(".time-s-up");

let totalSeconds = 0;
let intervalId;
let timerState = "idle";

startBtn.addEventListener("click", function() {
  timeIsUp.classList.remove("show");
  if (timerState == "running") return;

  startBtn.classList.add("hidden-btn");
  resetBtn.classList.remove("hidden-btn");
  stopBtn.classList.remove("hidden-btn");
  timerState = "running";

  intervalId = setInterval(() => {
    if (totalSeconds === 0) {
      totalSeconds = 0;
      clearInterval(intervalId);
      timerState = "idle";

      minutes.innerText = "00";
      seconds.innerText = "00";

      timeIsUp.classList.add("show");

      return;
    }

    totalSeconds--;
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    minutes.innerText = String(mins).padStart(2, "0");
    seconds.innerText = String(secs).padStart(2, "0");
  }, 1000);
});

stopBtn.addEventListener("click", function() {
  stopBtn.classList.add("hidden-btn");
  startBtn.classList.remove("hidden-btn");
  resetBtn.classList.add("hidden-btn");
  clearInterval(intervalId);
  intervalId = null;
  timerState = "paused";
})

resetBtn.addEventListener("click", function() {
  timeIsUp.classList.remove("show");
  startBtn.classList.remove("hidden-btn");
  stopBtn.classList.add("hidden-btn");
  resetBtn.classList.add("hidden-btn");

  totalSeconds = 0;
  minutes.innerText = "00";
  seconds.innerText = "00";
  timerState = "idle";

  clearInterval(intervalId);
});

setBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const rawMinutes = Number(getMinutes.value) > 59 ? 59 : Number(getMinutes.value) < 0 ? 0 : Number(getMinutes.value);
  const rawSeconds = Number(getSeconds.value) > 59 ? 59 : Number(getSeconds.value) < 0 ? 0 : Number(getSeconds.value);
  totalSeconds = Number(rawMinutes) * 60 + Number(rawSeconds);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  minutes.innerText = String(mins).padStart(2, "0");
  seconds.innerText = String(secs).padStart(2, "0");
})