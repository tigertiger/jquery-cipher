jQuery(document).ready(function() {
jQuery("h1").click(function() {
  alert("This is a heading.");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});

const sentence = prompt("Please enter a sentence.");
console.log(sentence);

function firstLastLetter () {
const firstLetter = sentence.charAt(0);
const lastLetter = sentence.charAt(sentence.length - 1);
return lastLetter.toUpperCase() + firstLetter.toUpperCase();
}
console.log(firstLastLetter());

});