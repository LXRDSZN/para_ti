
const submitButton = document.getElementById('submit-btn');
const answerInput = document.getElementById('answer-input');
const result = document.getElementById('result');

submitButton.addEventListener('click', function() {
  const userAnswer = answerInput.value.toLowerCase();

  if (userAnswer === '02' || userAnswer === 'dos' || userAnswer === 'dos corazones') {
    result.textContent = '¡Correcto! Eres mi fecha especial, recuerda esa fecha para un futuro acertijo.';
    result.style.color = 'green';
  } else {
    result.textContent = 'Incorrecto. Sigue intentando.';
    result.style.color = 'red';
  }

  result.classList.remove('hidden');
});