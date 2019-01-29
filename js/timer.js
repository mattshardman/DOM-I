(function timer() {
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const screen = document.getElementById('screen');

  const state = {
    time: 0,
    reset: false,
  };

  function msToTime(ms) {
    return new Date(ms).toISOString().slice(11, -1);
  }

  screen.textContent = msToTime(0);

  function disableButton(btn, disable, color) {
    btn.setAttribute('disable', disable);
    btn.style.cursor = disable ? 'not-allowed' : 'pointer';
    btn.style.background = disable ? '#ddd' : color;
  }

  // start timer
  function startTimer(time, endTime) {
    if (time < (endTime * 1000)) {
      if (state.reset) {
        return null;
      }
      const newTime = time + 10;
      screen.textContent = msToTime(newTime);
      return setTimeout(() => startTimer(newTime, endTime), 10);
    }
    screen.style.color = '#ea552c';
    disableButton(startButton, false, '#ea552c');
    return null;
  }

  // reset timer
  function reset() {
    state.reset = true;
    disableButton(startButton, false, '#3bdd8f');
    disableButton(resetButton, true);
    screen.textContent = msToTime(0);
    screen.style.color = '#000';
  }

  // set timer to start
  function start() {
    const timeValue = document.getElementById('time').value;
    state.reset = false;
    state.time = timeValue;
    disableButton(startButton, true);
    disableButton(resetButton, false, '#ea552c');
    startTimer(0, state.time || 10);
  }

  // event listeners
  startButton.addEventListener('click', start);
  resetButton.addEventListener('click', reset);
  document.addEventListener('keypress', (event) => {
    const key = event.keyCode;
    if (key === 13) {
      return start();
    }

    if (key === 114) {
      return reset();
    }
    return null;
  });
}());
