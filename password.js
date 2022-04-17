const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool');

// let capitalLetters = /[A-Z]/g
// let numbers = /[0-9]/g
reader.question('Enter a password to be validated', function(input){
    pwd = input.split('');

    if (pwd.length > 10) {
        console.log('Password accepted');
    } if (pwd.length < 10){
        console.log('Needs more characters');
    }
        // I tried doing the extra credit but did not manage to do so.

    //  console.log(input.search(capitalLetters), 'Needs at least 1 Capital Letter');
    //  console.log(input[input.search(numbers)]);
    //  console.log(input.search(numbers), 'Needs at least 1 Number');

reader.close()

});