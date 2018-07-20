let missed = 0;
const phrases = [
    'how long is a peice of string',
    'as far as the eye can see',
    'it is not over until the fat lady sings',
    'two wrongs do not make a right',
    'once in a blue moon',
    'speak of the devil',
    'when pigs fly',
    'do not judge a book by the cover',
]
const keyboardDiv = document.querySelector('#qwerty');
const phraseDiv = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const UL = document.querySelector('#phrase ul');
const PhraseCharacters =  getRandomPhraseAsArray(phrases);
const letters = document.getElementsByClassName('letter');

function getRandomPhraseAsArray(array) {
    function getRandomNum(array) {
        return Math.floor(Math.random() * (array.length));
    }
    const randomNum = getRandomNum(array);
    const randomPhrase = phrases[randomNum];
    const characterArray = randomPhrase.split('');
    return characterArray;
}
function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        const character = array[i];
        const listItem = document.createElement('li');
        UL.appendChild(listItem);
        listItem.textContent = character;

        if (listItem.textContent !== " " ) {
            listItem.classList.add('letter');
        }
    }
}

function checkLetter(button) {
    for (let i = 0; i < PhraseCharacters.length; i++) {
        if (button.textContent === letters[i].textContent) {
            const matchedLetter = letters[i];
            matchedLetter.classList.add('show');
        }
    }
}

keyboardDiv.addEventListener('click', (e) => {
    e.target.classList.add('chosen');
    e.target.setAttribute("disabled", "disabled");

    const letterFound = checkLetter(e.target);
});

startBtn.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
});

addPhraseToDisplay(PhraseCharacters);