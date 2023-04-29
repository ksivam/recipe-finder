const logElement = document.getElementById('log');

const log = function(message) {
  logElement.innerHTML += message + '<br>';
};