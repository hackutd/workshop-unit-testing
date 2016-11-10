const utils = require('./utils');
const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Enter a word: ', function (word) {
  console.log('Reversed:', utils.reverse(word));

  interface.question('Enter a sentence: ', function (sentence) {
    console.log('Piglatin:', utils.piglatin(sentence));

    process.exit();
  });
});
