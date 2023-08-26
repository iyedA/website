'use strict';
let game = document.querySelector('.game');
let gameStarter = document.querySelector('.gameStarter');
let difficultyButtons = {
  Easy: document.querySelector('#diffButtonEasy'),
  Medium: document.querySelector('#diffButtonMedium'),
  Hard: document.querySelector('#diffButtonHard'),
};
let wordSelector = document.querySelector('.wordSelector');
let answers = document.querySelector('.answers');
let answersBtn = document.querySelectorAll('.answersBtn');
let answerSelector = {
  nom: document.querySelector('#nom'),
  adjectif: document.querySelector('#adjectif'),
  verbe: document.querySelector('#verbe'),
  determinant: document.querySelector('#determinant'),
  adverbe: document.querySelector('#adverbe'),
  preposition: document.querySelector('#preposition'),
  pronom: document.querySelector('#pronom'),
  conjonction: document.querySelector('#conjonction'),
};
let labelTimer = document.querySelector('#labelTimer');
let score = document.querySelector('#score');
let mediumAnswers = document.querySelector('.mediumAnswers');
let hardAnswers = document.querySelector('.hardAnswers');
let gameResults = document.querySelector('.gameResults');
//words list
let arrayEasy = [
  { word: 'abcd', type: '' },
  { word: 'abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd', type: '' },
  // { word: 'abcdabcdabcd', type: '' },
  // { word: 'abcdabcdabcdabcdabcdabcdabcdabcd', type: '' },
  // { word: 'abcdabcdabcdabcdabcdabcd', type: '' },
  // {
  //   word: 'abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabdabcdabcdabcd',
  //   type: '',
  // },
  // { word: 'abcdabcdabcd', type: '' },
  // { word: 'abcdabcd', type: '' },
  // { word: 'abcdabcd', type: '' },
  // { word: 'abcdabcd', type: '' },
];
let arrayMedium = [
  { word: 'élégant', type: 'adjectif' },
  { word: 'intélligent', type: 'adjectif' },
  { word: 'immobilier', type: 'nom' },
  { word: 'atelier', type: 'nom' },
  { word: 'planner', type: 'verbe' },
  { word: 'définir', type: 'verbe' },
  { word: 'verser', type: 'verbe' },
  { word: 'pour', type: 'préposition' },
  { word: 'de', type: 'préposition' },
  { word: 'à', type: 'préposition' },
  { word: 'par', type: 'préposition' },
  { word: 'sans', type: 'préposition' },
  { word: 'rapidement', type: 'adverbe' },
  { word: 'élégant', type: 'adjectif' },
  { word: 'intélligent', type: 'adjectif' },
  { word: 'immobilier', type: 'nom' },
  { word: 'atelier', type: 'nom' },
  { word: 'planner', type: 'verbe' },
  { word: 'définir', type: 'verbe' },
  { word: 'verser', type: 'verbe' },
  { word: 'pour', type: 'préposition' },
  { word: 'de', type: 'préposition' },
  { word: 'à', type: 'préposition' },
  { word: 'par', type: 'préposition' },
  { word: 'sans', type: 'préposition' },
  { word: 'rapidement', type: 'adverbe' },
  { word: 'élégant', type: 'adjectif' },
  { word: 'intélligent', type: 'adjectif' },
  { word: 'immobilier', type: 'nom' },
  { word: 'atelier', type: 'nom' },
  { word: 'planner', type: 'verbe' },
  { word: 'définir', type: 'verbe' },
  { word: 'verser', type: 'verbe' },
  { word: 'pour', type: 'préposition' },
  { word: 'de', type: 'préposition' },
  { word: 'à', type: 'préposition' },
  { word: 'par', type: 'préposition' },
  { word: 'sans', type: 'préposition' },
  { word: 'rapidement', type: 'adverbe' },
  { word: 'élégant', type: 'adjectif' },
  { word: 'intélligent', type: 'adjectif' },
  { word: 'immobilier', type: 'nom' },
  { word: 'atelier', type: 'nom' },
  { word: 'planner', type: 'verbe' },
  { word: 'définir', type: 'verbe' },
  { word: 'verser', type: 'verbe' },
  { word: 'pour', type: 'préposition' },
  { word: 'de', type: 'préposition' },
  { word: 'à', type: 'préposition' },
  { word: 'par', type: 'préposition' },
  { word: 'sans', type: 'préposition' },
  { word: 'rapidement', type: 'adverbe' },
];
let arrayHard = [
  { word: 'élégant', type: 'adjectif' },
  { word: 'intélligent', type: 'adjectif' },
  { word: 'immobilier', type: 'nom' },
  { word: 'atelier', type: 'nom' },
  { word: 'planner', type: 'verbe' },
  { word: 'définir', type: 'verbe' },
  { word: 'verser', type: 'verbe' },
  { word: 'pour', type: 'préposition' },
  { word: 'de', type: 'préposition' },
  { word: 'à', type: 'préposition' },
  { word: 'par', type: 'préposition' },
  { word: 'sans', type: 'préposition' },
  { word: 'rapidement', type: 'adverbe' },
];
//Define starting values
let timeUsed;
let timerOn = false;
const timeEasy = 12;
const timeMedium = 10;
const timeHard = 8;
let arrayUsed;
let gameStarted = false;
let expiredArray = new Set();
let wordSelected;
let wrongChoices = [];
let counter = 0;
// Game Diff Selector
for (let [diff, button] of Object.entries(difficultyButtons)) {
  button.addEventListener('click', () => {
    gameSetup(diff);
  });
}
function gameSetup(diff) {
  if (gameStarted) {
    return; // Don't set up the game again if it's already started
  }

  gameStarter.style = 'display:none';
  game.style = 'display:block';

  if (diff == 'Hard') {
    arrayUsed = arrayHard;
    timeUsed = timeEasy;
  } else if (diff == 'Medium') {
    arrayUsed = arrayMedium;
    timeUsed = timeMedium;
    hardAnswers.style = 'display:none';
  } else {
    arrayUsed = arrayEasy;
    timeUsed = timeHard;
    hardAnswers.style = 'display:none';
    mediumAnswers.style = 'display:none';
  }
  gameStarted = true;
  updateWordSelector();
  startTimer(timeUsed, timerOn);
}
//
//
//
//
//
function updateWordSelector() {
  // Remove the previous event listener before adding a new one
  answers.removeEventListener('click', answerClickListener);

  let wordSelectedIndex;
  let elementSelected;

  do {
    wordSelectedIndex = Math.trunc(Math.random() * arrayUsed.length);
    elementSelected = arrayUsed[wordSelectedIndex];
  } while (
    expiredArray.has(elementSelected) &&
    arrayUsed.length > expiredArray.size
  );

  wordSelector.textContent = `${elementSelected.word}`;
  expiredArray.add(elementSelected);
  if (arrayUsed.length <= expiredArray.size) {
    labelTimer.textContent =
      'Whoops! Vous avez épuisé notre dictionnaire de mots! Actualisez la page pour relancer à nouveau!';
    clearInterval(window.timerInterval);
    answers.style = 'display:none';
    wordSelector.style = 'display:none';
  }

  window.elementSelected = elementSelected;

  // Attach the event listener using a named function
  answers.addEventListener('click', answerClickListener);
}

// Named function to handle answer button clicks
function answerClickListener(event) {
  pickAnswer(event, window.elementSelected, timeUsed, score);
}
//Define startTimer function
function startTimer(time, timerOn) {
  if (!timerOn) {
    let sTime = time;
    let timerInterval = setInterval(function () {
      labelTimer.textContent = time;
      time--;
      if (time < 0) {
        clearInterval(timerInterval);
        handletimeOut(sTime);
      }
    }, 1000);
    window.timerInterval = timerInterval;
  }
}
//Define handletimeOut function
function handletimeOut(timeUsed) {
  startTimer(timeUsed);
  updateWordSelector();
}
//Define pickAnswer function
function pickAnswer(event, elementSelected, timeUsed, score) {
  let eventTarget = event.target;
  if (eventTarget.tagName === 'BUTTON') {
    clearInterval(timerInterval);
    if (eventTarget.getAttribute('id') == elementSelected.type) {
      handletimeOut(timeUsed);
    } else {
      wrongChoices.push(elementSelected);
      handletimeOut(timeUsed);
    }
    counter++;
    score.textContent = `${counter}/40`;
  }
  if (counter >= 40) {
    game.style = 'display:none';
    gameResults.innerHTML = `<p>Vous avez ${
      wrongChoices.length
    }/40 erreurs!</p><br/>
    ${displayMistakes(wrongChoices).join('')}`;
  }
}
function displayMistakes(wrongChoices) {
  let wrongChoicesList = [];
  for (let i = 0; i < wrongChoices.length; i++) {
    wrongChoicesList.push(
      `<p class="wrongChoices">${wrongChoices[i].word} : ${wrongChoices[i].type}</p><br/>`
    );
  }
  return wrongChoicesList;
}
