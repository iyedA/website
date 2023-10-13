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
  { word: 'la mère', type: 'Nom/G.N' },
  { word: 'un', type: 'Déterminant' },
  { word: 'beau', type: 'Adjectif' },
  { word: 'prendre', type: 'Verbe' },
  { word: 'aller', type: 'Verbe' },
  { word: 'travail', type: 'Nom/G.N' },
  { word: 'travailler', type: 'Verbe' },
  { word: 'triste', type: 'Adjectif' },
  { word: 'calculer', type: 'Verbe' },
  { word: 'une porte', type: 'Nom/G.N' },
  { word: 'trouver', type: 'Verbe' },
  { word: 'les jouets', type: 'Nom/G.N' },
  { word: 'la', type: 'Déterminant' },
  { word: 'heureux', type: 'Adjectif' },
  { word: 'le', type: 'Déterminant' },
  { word: "l'", type: 'Déterminant' },
  { word: 'partir', type: 'Verbe' },
  { word: 'une piscine', type: 'Nom/G.N' },
  { word: 'le stade', type: 'Nom/G.N' },
  { word: 'des', type: 'Déterminant' },
  { word: 'notre chien', type: 'Nom/G.N' },
  { word: 'lire', type: 'Verbe' },
  { word: 'livre', type: 'Nom/G.N' },
  { word: 'la rentrée', type: 'Nom/G.N' },
  { word: 'fier', type: 'Adjectif' },
  { word: 'levons', type: 'Verbe' },
  { word: "l'estime", type: 'Nom/G.N' },
  { word: 'paresseux', type: 'Adjectif' },
  { word: 'douceur', type: 'Nom/G.N' },
  { word: 'élèves', type: 'Nom/G.N' },
  { word: 'expliquer', type: 'Verbe' },
  { word: 'donner', type: 'Verbe' },
  { word: 'ma', type: 'Déterminant' },
  { word: 'sa soeur', type: 'Nom/G.N' },
  { word: 'seul', type: 'Adjectif' },
  { word: 'soleil', type: 'Nom/G.N' },
  { word: 'son père', type: 'Nom/G.N' },
  { word: 'sévère', type: 'Adjectif' },
  { word: 'peur', type: 'Nom/G.N' },
  { word: 'écrire', type: 'Verbe' },
  { word: 'une histoire', type: 'Nom/G.N' },
  { word: 'un personnage', type: 'Nom/G.N' },
  { word: 'rions', type: 'Verbe' },
  { word: 'notre', type: 'Déterminant' },
  { word: 'tes frères', type: 'Nom/G.N' },
  { word: 'une ville', type: 'Nom/G.N' },
  { word: 'la villa', type: 'Nom/G.N' },
  { word: 'déserte', type: 'Adjectif' },
  { word: 'chaud', type: 'Adjectif' },
  { word: 'balle', type: 'Nom/G.N' },
  { word: 'le collège', type: 'Nom/G.N' },
  { word: 'vos', type: 'Déterminant' },
  { word: 'votre famille', type: 'Nom/G.N' },
  { word: 'naitre', type: 'Verbe' },
  { word: 'maitre', type: 'Nom/G.N' },
  { word: 'mettre', type: 'Verbe' },
  { word: 'laid', type: 'Adjectif' },
  { word: 'le', type: 'Déterminant' },
  { word: "l'eau", type: 'Nom/G.N' },
  { word: 'le lait', type: 'Nom/G.N' },
  { word: 'boire', type: 'Verbe' },
  { word: 'la classe', type: 'Verbe' },
  { word: 'leur', type: 'Déterminant' },
  { word: 'un directeur', type: 'Nom/G.N' },
  { word: 'gentil', type: 'Adjectif' },
  { word: 'les professeurs', type: 'Nom/G.N' },
  { word: 'bon', type: 'Adjectif' },
  { word: 'bonheur', type: 'Nom/G.N' },
  { word: 'arriver', type: 'Verbe' },
  { word: "l'arrivée", type: 'Nom/G.N' },
  { word: 'un texte', type: 'Nom/G.N' },
  { word: 'facile', type: 'Adjectif' },
  { word: 'difficile', type: 'Adjectif' },
  { word: 'la campagne', type: 'Nom/G.N' },
  { word: 'plein', type: 'Adjectif' },
  { word: 'courageux', type: 'Adjectif' },
  { word: 'mes', type: 'Déterminant' },
  { word: 'fiche', type: 'Nom/G.N' },
];
let arrayMedium = [
  { word: 'élégant', type: 'Adjectif' },
  { word: 'intélligent', type: 'Adjectif' },
  { word: 'immobilier', type: 'Nom/G.N' },
  { word: 'atelier', type: 'Nom/G.N' },
  { word: 'planner', type: 'Verbe' },
  { word: 'définir', type: 'Verbe' },
  { word: 'verser', type: 'Verbe' },
  { word: 'pour', type: 'Préposition' },
  { word: 'de', type: 'Préposition' },
  { word: 'à', type: 'Préposition' },
  { word: 'par', type: 'Préposition' },
  { word: 'sans', type: 'Préposition' },
  { word: 'rapidement', type: 'Adverbe' },
  { word: 'prendre', type: 'Verbe' },
  { word: 'calculer', type: 'Verbe' },
  { word: 'trouver', type: 'Verbe' },
  { word: 'heureux', type: 'Adjectif' },
  { word: 'le', type: 'Déterminant' },
  { word: 'partir', type: 'Verbe' },
  { word: 'notre chien', type: 'Nom/G.N' },
  { word: 'levons', type: 'Verbe' },
  { word: 'paresseux', type: 'Adjectif' },
  { word: 'douceur', type: 'Nom/G.N' },
  { word: 'expliquer', type: 'Verbe' },
  { word: 'seul', type: 'Adjectif' },
  { word: 'sévère', type: 'Adjectif' },
  { word: 'peur', type: 'Nom/G.N' },
  { word: 'écrire', type: 'Verbe' },
  { word: 'rions', type: 'Verbe' },
  { word: 'notre', type: 'Déterminant' },
  { word: 'déserte', type: 'Adjectif' },
  { word: 'chaud', type: 'Adjectif' },
  { word: 'vos', type: 'Déterminant' },
  { word: 'naitre', type: 'Verbe' },
  { word: 'maitre', type: 'Nom/G.N' },
  { word: 'mettre', type: 'Verbe' },
  { word: 'laid', type: 'Adjectif' },
  { word: 'boire', type: 'Verbe' },
  { word: 'leur', type: 'Déterminant' },
  { word: 'arriver', type: 'Verbe' },
  { word: 'facile', type: 'Adjectif' },
  { word: 'difficile', type: 'Adjectif' },
  { word: 'plein', type: 'Adjectif' },
  { word: 'courageux', type: 'Adjectif' },
  { word: 'mes', type: 'Déterminant' },
  { word: 'hiver', type: 'Nom/G.N' },
  { word: 'hier', type: 'Adverbe' },
  { word: "s'habiller", type: '' },
  { word: 'ce', type: 'Déterminant' },
  { word: 'la lune', type: 'Nom/G.N' },
  { word: 'ces', type: 'Déterminant' },
  { word: 'heureusement', type: 'Adverbe' },
  { word: 'maintenant', type: 'Adverbe' },
  { word: 'demain', type: 'Adverbe' },
  { word: "aujourd'hui", type: 'Adverbe' },
  { word: 'calmement', type: 'Adverbe' },
  { word: "l'angoisse", type: 'Nom/G.N' },
  { word: 'la joie', type: 'Nom/G.N' },
  { word: "l'anxiété", type: 'Nom/G.N' },
  { word: 'printemps', type: 'Nom/G.N' },
  { word: 'proposer', type: 'Verbe' },
  { word: 'suivre', type: 'Verbe' },
  { word: 'don', type: 'Nom/G.N' },
  { word: "l'été", type: 'Nom/G.N' },
  { word: "l'automne", type: 'Nom/G.N' },
  { word: 'la terre', type: 'Nom/G.N' },
  { word: 'gentiment', type: 'Adverbe' },
  { word: 'une rivière', type: 'Nom/G.N' },
  { word: 'la forêt', type: 'Nom/G.N' },
  { word: 'admirer', type: 'Verbe' },
  { word: 'admirable', type: 'Adjectif' },
  { word: 'amitié', type: 'Nom/G.N' },
  { word: 'amical', type: 'Adjectif' },
  { word: 'procurer', type: 'Verbe' },
  { word: 'rendre', type: 'Verbe' },
  { word: 'saisir', type: 'Verbe' },
  { word: 'crainte', type: 'Nom/G.N' },
  { word: 'craindre', type: 'Verbe' },
  { word: 'chant', type: 'Nom/G.N' },
  { word: 'chanter', type: 'Verbe' },
  { word: 'champs', type: 'Nom/G.N' },
  { word: 'chanteur', type: 'Nom/G.N' },
  { word: 'vers', type: 'Préposition' },
  { word: 'verte', type: 'Adjectif' },
  { word: 'propreté', type: 'Nom/G.N' },
  { word: 'dense', type: 'Adjectif' },
  { word: 'danser', type: 'Verbe' },
  { word: 'danseur', type: 'Nom/G.N' },
  { word: 'somme', type: 'Nom/G.N' },
  { word: 'pré', type: 'Nom/G.N' },
  { word: 'personne', type: 'Nom/G.N' },
  { word: 'tout à coup', type: 'Adverbe' },
  { word: 'puis', type: 'Adverbe' },
  { word: 'ensuite', type: 'Adverbe' },
  { word: 'dans', type: 'Préposition' },
  { word: 'après', type: 'Préposition' },
  { word: 'régulièrement', type: 'Adverbe' },
];
let arrayHard = [
  { word: 'définir', type: 'Verbe' },
  { word: 'verser', type: 'Verbe' },
  { word: 'pour', type: 'Préposition' },
  { word: 'de', type: 'Préposition' },
  { word: 'à', type: 'Préposition' },
  { word: 'par', type: 'Préposition' },
  { word: 'sans', type: 'Préposition' },
  { word: 'rapidement', type: 'Adverbe' },
  { word: 'prendre', type: 'Verbe' },
  { word: 'heureux', type: 'Adjectif' },
  { word: 'partir', type: 'Verbe' },
  { word: 'levons', type: 'Verbe' },
  { word: 'paresseux', type: 'Adjectif' },
  { word: 'douceur', type: 'Nom/G.N' },
  { word: 'expliquer', type: 'Verbe' },
  { word: 'seul', type: 'Adjectif' },
  { word: 'sévère', type: 'Adjectif' },
  { word: 'peur', type: 'Nom/G.N' },
  { word: 'écrire', type: 'Verbe' },
  { word: 'rions', type: 'Verbe' },
  { word: 'déserte', type: 'Adjectif' },
  { word: 'naitre', type: 'Verbe' },
  { word: 'maitre', type: 'Nom/G.N' },
  { word: 'laid', type: 'Adjectif' },
  { word: 'leur', type: 'Déterminant' },
  { word: 'arriver', type: 'Verbe' },
  { word: 'facile', type: 'Adjectif' },
  { word: 'difficile', type: 'Adjectif' },
  { word: 'plein', type: 'Adjectif' },
  { word: 'mes', type: 'Déterminant' },
  { word: 'hiver', type: 'Nom/G.N' },
  { word: 'hier', type: 'Adverbe' },
  { word: 'heureusement', type: 'Adverbe' },
  { word: 'maintenant', type: 'Adverbe' },
  { word: 'demain', type: 'Adverbe' },
  { word: "aujourd'hui", type: 'Adverbe' },
  { word: 'calmement', type: 'Adverbe' },
  { word: 'printemps', type: 'Nom/G.N' },
  { word: 'proposer', type: 'Verbe' },
  { word: 'suivre', type: 'Verbe' },
  { word: "l'été", type: 'Nom/G.N' },
  { word: 'la terre', type: 'Nom/G.N' },
  { word: 'gentiment', type: 'Adverbe' },
  { word: 'une rivière', type: 'Nom/G.N' },
  { word: 'la forêt', type: 'Nom/G.N' },
  { word: 'admirer', type: 'Verbe' },
  { word: 'admirable', type: 'Adjectif' },
  { word: 'amitié', type: 'Nom/G.N' },
  { word: 'amical', type: 'Adjectif' },
  { word: 'procurer', type: 'Verbe' },
  { word: 'rendre', type: 'Verbe' },
  { word: 'saisir', type: 'Verbe' },
  { word: 'crainte', type: 'Nom/G.N' },
  { word: 'craindre', type: 'Verbe' },
  { word: 'chant', type: 'Nom/G.N' },
  { word: 'chanter', type: 'Verbe' },
  { word: 'champs', type: 'Nom/G.N' },
  { word: 'chanteur', type: 'Nom/G.N' },
  { word: 'vers', type: 'Préposition' },
  { word: 'verte', type: 'Adjectif' },
  { word: 'propreté', type: 'Nom/G.N' },
  { word: 'danser', type: 'Verbe' },
  { word: 'danseur', type: 'Nom/G.N' },
  { word: 'somme', type: 'Nom/G.N' },
  { word: 'pré', type: 'Nom/G.N' },
  { word: 'personne', type: 'Nom/G.N' },
  { word: 'tout à coup', type: 'Adverbe' },
  { word: 'puis', type: 'Adverbe' },
  { word: 'ensuite', type: 'Adverbe' },
  { word: 'dans', type: 'Préposition' },
  { word: 'après', type: 'Préposition' },
  { word: 'régulièrement', type: 'Adverbe' },
  { word: 'et', type: 'Conjonction' },
  { word: 'ou', type: 'Conjonction' },
  { word: 'mais', type: 'Conjonction' },
  { word: 'car', type: 'Conjonction' },
  { word: 'ni', type: 'Conjonction' },
  { word: 'donc', type: 'Conjonction' },
  { word: 'or', type: 'Conjonction' },
  { word: 'quelques', type: 'Déterminant' },
  { word: 'plusieurs', type: 'Déterminant' },
  { word: "quelqu'un", type: 'Pronom' },
  { word: 'aucun', type: 'Pronom' },
  { word: 'chacun', type: 'Pronom' },
  { word: 'celui', type: 'Pronom' },
  { word: 'celle', type: 'Pronom' },
  { word: 'ceux', type: 'Pronom' },
  { word: 'eux', type: 'Pronom' },
  { word: 'qui', type: 'Pronom' },
  { word: 'quand', type: 'Conjonction' },
  { word: 'ceci', type: 'Pronom' },
  { word: 'celà', type: 'Pronom' },
  { word: 'celui-ci', type: 'Pronom' },
  { word: 'celui', type: 'Pronom' },
  { word: 'là', type: 'Adverbe' },
  { word: 'lequel', type: 'Pronom' },
  { word: 'lesquels', type: 'Pronom' },
  { word: 'patrie', type: 'Nom/G.N' },
  { word: 'patrimoine', type: 'Nom/G.N' },
  { word: 'chaleureux', type: 'Adjectif' },
  { word: 'portail', type: 'Nom/G.N' },
  { word: 'portier', type: 'Nom/G.N' },
  { word: 'mélancolique', type: 'Adjectif' },
  { word: 'divinité', type: 'Nom/G.N' },
  { word: 'divin', type: 'Adjectif' },
  { word: 'le nôtre', type: 'Pronom' },
  { word: 'les miens', type: 'Pronom' },
  { word: 'les vôtres', type: 'Pronom' },
  { word: 'la sienne', type: 'Pronom' },
  { word: 'chaine', type: 'Nom/G.N' },
  { word: 'chance', type: 'Nom/G.N' },
  { word: 'chaos', type: 'Nom/G.N' },
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
