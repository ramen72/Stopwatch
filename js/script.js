let minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval;

const updateDisplay = () => {
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(2, "0");
};

const startTimer = () => {
  if (timerInterval) return; // যদি টাইমার চলছে, নতুন টাইমার শুরু না হয়।
  timerInterval = setInterval(() => {
    milliseconds += 1;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    updateDisplay();
  }, 10);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

const resetTimer = () => {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
};

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
