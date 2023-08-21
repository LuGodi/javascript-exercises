const palindromes = function (sentence) {

const re = /([a-z]|\d)/gi
sentence = sentence.match(re)
const reversedSentence = [...sentence].reverse()
// to reversed not working for some reason
return reversedSentence.join("").toLowerCase() === sentence.join("").toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
