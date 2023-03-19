const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

stopButton.setAttribute('disabled', true);
let timeId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function ColorChange() {
  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function startColorChange() {
  ColorChange();

  stopButton.removeAttribute('disabled');
  startButton.setAttribute('disabled', true);
}

function stopColorChange() {
  clearInterval(timeId);

  stopButton.setAttribute('disabled', true);
  startButton.removeAttribute('disabled');
}
