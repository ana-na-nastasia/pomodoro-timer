const startButton = document.querySelector('#start');
const pomodoroTime = document.querySelector('#pomodoro-time');
let timerId;

startButton.addEventListener('click', countsTime);

function countsTime() {
  if(startButton.textContent === 'stop') {
    startButton.textContent = 'start';
    clearInterval(timerId);
  } else {
      startButton.textContent = 'stop';
      timerId = setInterval(() => {
        const time = pomodoroTime.textContent.split(":");
        let min = parseInt(time[0]);
        let sec = parseInt(time[1]);
        sec--;
        if (sec === -1) {
          min--;
          sec = 59;
        }
        if (min === 0 && sec === 0) {
          startButton.textContent = "start";
          clearInterval(timerId);
          pomodoroTime.textContent = "25:00";
          return pomodoroTime;
        }
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        pomodoroTime.textContent = `${min}:${sec}`;
      }, 150);
    }
}