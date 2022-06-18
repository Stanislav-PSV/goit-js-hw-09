function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
btnStart.addEventListener('click', bgcRandom);

const btnStop = document.querySelector('button[data-stop]');
btnStop.addEventListener('click', stopColor);

let timerId = null;

function bgcRandom(evt) {
  btnStart.setAttribute('disabled', true);
  timerId = setInterval(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColor(evt) {
  btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}
