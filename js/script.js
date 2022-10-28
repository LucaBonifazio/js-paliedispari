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
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }




// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt('Scegli, pari o dispari?');
console.log(userChoice);
const userChoiceNumber = parseInt(prompt('Scegli un numero da 1 a 5?'));
console.log(userChoiceNumber);

// Sommiamo i due numeri
const result = (userChoice + botChoice);

// Dichiariamo chi ha vinto.
if (isEven(result)) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function botChoice(min, max) {
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