let currentTable = 1;
let currentMultiplier = 1;
let timer = 50;
let interval;
let correctAnswers = 0;
let incorrectAnswers = 0;

const tableSelect = document.getElementById("tabla");
const startButton = document.getElementById("iniciar");
const questionElement = document.getElementById("preguntas");
const optionsElement = document.getElementById("opciones");
const timerElement = document.getElementById("tiempo");
const scoreElement = document.getElementById("seg");
const restartButton = document.getElementById("restartButton");
const restartButtonContainer = document.getElementById("restartButtonContainer");

tableSelect.addEventListener("change", updateCurrentTable);
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function updateCurrentTable() {
  currentTable = parseInt(tableSelect.value);
}

function startGame() {
  startButton.disabled = true;
  restartButtonContainer.style.display = "none";
  timerElement.textContent = `Tiempo restante: ${timer}`;
  interval = setInterval(updateTimer, 1000);
  correctAnswers = 0;
  incorrectAnswers = 0;
  generateQuestionOrdered();
}

function restartGame() {
    clearInterval(interval);
    startButton.disabled = false;
    restartButtonContainer.style.display = "none";
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    timerElement.textContent = `Tiempo restante: ${timer}`;
    scoreElement.textContent = "";
    currentMultiplier = 1;
    correctAnswers = 0;
    incorrectAnswers = 0;
  }
function generateQuestionOrdered() {
  currentMultiplier = 1;
  generateNextQuestion();
}

function generateNextQuestion() {
  if (timer > 0) {
    if (currentMultiplier <= 10 || correctAnswers >= 20) {
      const result = currentTable * currentMultiplier;
      questionElement.textContent = `${currentTable} x ${currentMultiplier} = ?`;

      const options = generateRandomOptionsOrdered(result);
      shuffleArray(options);

      optionsElement.innerHTML = "";
      for (let i = 0; i < options.length; i++) {
        const option = document.createElement("div");
        option.className = "option";
        option.textContent = options[i];
        option.addEventListener("click", () => checkAnswer(option.textContent, result));
        optionsElement.appendChild(option);
      }
    } else {
      questionElement.textContent = "¡Lograste 20 aciertos en esta tabla!";
      optionsElement.innerHTML = "";
      generateQuestionOrdered();
    }
  } else {
    clearInterval(interval);
    questionElement.textContent = "¡Aaaaaaa Se acabó el tiempo!";
    optionsElement.innerHTML = "";
    if (correctAnswers < 20) {
      scoreElement.textContent = `Respuestas correctas: ${correctAnswers}, Respuestas incorrectas: ${incorrectAnswers}\n¡No has llegado a 20 aciertos!`;
    } else {
      scoreElement.textContent = `Respuestas correctas: ${correctAnswers}, Respuestas incorrectas: ${incorrectAnswers}.`;
    }
    restartButtonContainer.style.display = "block";
  }
}

function generateRandomOptionsOrdered(correctAnswer) {
  const options = [correctAnswer];
  while (options.length < 4) {
    const randomOption = correctAnswer + Math.floor(Math.random() * 10) + 1;
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }
  return options;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (parseInt(selectedAnswer) === correctAnswer) {
    currentMultiplier++;
    correctAnswers++;
    generateNextQuestion();
  } else {
    incorrectAnswers++;
    generateNextQuestion();
  }
}

function updateTimer() {
  timer--;
  timerElement.textContent = `Tiempo restante: ${timer}\n`;
  generateNextQuestion();
}
