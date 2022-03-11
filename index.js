const dic = require('./dic.json');
const starterWords = require('./starter-words');

// position: { index: 0, letter: '' }
const nonexistentLetters = ['s','c','k','b','r'];
const incorrectPositionLettes = [{ index: 1, letter: 't' },{ index: 3, letter: 't' },{ index: 4, letter: 'h' }];
const correctPositionLetters = [
    { index: 1, letter: 'i' }
];

const isLetterInCorrectPosition = word => ({ index, letter}) => {
    // for(let i = 0; i < word.length; i++)
    //     if(i === index && word[i] !== letter)
    //         return false;
    //     else if (i !== index && word[i] === letter)
    //         return false;

    // return true;
    return word[index] === letter;
}


const filter = word => {
    if(nonexistentLetters.length && Array.from(word).some(letter => nonexistentLetters.includes(letter)))
        return false;
    if(incorrectPositionLettes.length && !incorrectPositionLettes.every(({ index, letter}) => word.includes(letter) && word[index] !== letter))
        return false;
    return correctPositionLetters.length
        ? correctPositionLetters.every(isLetterInCorrectPosition(word))
        : true;
}

let candidates = starterWords.filter(filter);

if(candidates.length < 5)
    candidates = console.log(`too few single vowel candidates (${candidates.length})`) || [...candidates, ...dic.filter(filter)];

console.log('candidates', candidates);