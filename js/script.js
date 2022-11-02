// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Palindroma

// Chiedere all’utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);

if (palindrome(userWord)) {
    console.log('è palindroma');
    alert('è palindroma');
} else {
    console.log('Non è palindroma');
    alert('Non è palindroma');
}

// Creare una funzione per capire se la parola inserita è palindroma

function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;

    // metodo 2
    // let invertedWord = '';
    // for (let i = testWord.length - 1; i >= 0; i--) {
      // 	invertedWord += testWord[i];
      // }
      // if (testWord === invertedWord) {
        // 	return true;
        // }
	// return false;
  
	// metodo 3
	// const indexHalf = parseInt(testWord.length / 2);
	// for (let i = 0; i < indexHalf; i++) {
    // 	console.log(testWord[i], testWord[testWord.length - 1 - i]);
    // 	if (testWord[i] !== testWord[testWord.length - 1 - i]) {
      // 		return false;
      // 	}
      // }
      // return true;
    }


// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt('Scegli, pari o dispari?').toLowerCase();;
userChoice = userChoice === 'pari' ? 0 : 1;
// console.log(userChoice);
const userChoiceNumber = parseInt(prompt('Scegli un numero da 1 a 5?'));
// console.log(userChoiceNumber);
const botChoice = getRandomInteger(1, 5);

// Dichiariamo chi ha vinto.
if (isDivisible(userChoiceNumber + botChoice, userChoice)) {
	console.log(userChoiceNumber, botChoice, 'Hai vinto');
} else {
	console.log(userChoiceNumber, botChoice, 'Hai perso');
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(number) {
    if (number % 2) {
      return false;
	} else {
      return true;
	}
}

function isDivisible(number, divisibility) {
	if ((divisibility === 0 && number % 2 === 0) || (divisibility === 1 && number % 2 !== 0)) {
		return true;
	}
	return false;
}
