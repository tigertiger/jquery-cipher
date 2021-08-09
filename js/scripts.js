
const sentence = prompt("Please enter a sentence.");

function firstLastLetter (sentence) {
  const firstLetter = sentence.charAt(0);
  const lastLetter = sentence.charAt(sentence.length - 1);
  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
}

function reverseFirstLastLetter (sentence) {
  // const firstLetter = sentence.charAt(0);
  // const lastLetter = sentence.charAt(sentence.length - 1);
  // return lastLetter.toUpperCase() + firstLetter.toUpperCase();
  return sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase();
}

function printLetters() {
  return sentence + reverseFirstLastLetter(firstLastLetter(sentence));
}

function countLetters() {
  const roundy = Math.floor(sentence.length / 2);
  console.log(sentence.length);
  console.log(roundy);
  return sentence.charAt(roundy);
}

console.log(printLetters());
console.log(countLetters());