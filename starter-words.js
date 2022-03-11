const dic = require('./dic.json');

const vowels = ['a','e','i','y', 'o','u'];

const starterWords = [];

for(let word of dic) {
    let hasVowel = false;
    let skip = false;
    const consonants = {};

    for(let letter of word) {
        if(vowels.includes(letter)) {
            if(hasVowel) {
                skip = true;
                break;
            }
            hasVowel = true;
        } else if(consonants[letter]) {
            skip = true;
            break;
        } else {
            consonants[letter] = true;
        }

    }

    if(!skip)
        starterWords.push(word);
}

module.exports = starterWords;