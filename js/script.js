// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola');
console.log(userWord);

if (palindrome(userWord)) {
    console.log('è palindroma');
    alert('è palindroma');
} else {
	console.log('Non è palindroma');
    alert('Non è palindroma');
}

function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt('Scegli, pari o dispari?');
console.log(userChoice);

if (userChoice.value !== 'pari' && 'dispari') {
    alert('Valore errato!');
    console.log('Valore errato!');
}

const userChoiceNumber = parseInt(prompt('Scegli un numero da 1 a 5?'));
console.log(userChoiceNumber);

if (userChoiceNumber > 5) {
    alert('Scelta inopportuna!');
    console.log('Scelta inopportuna!');
}

if (isEven(userChoiceNumber)) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

function isEven(number, number2) {
    if (number % 2) {
        return false;
	} else {
        return true;
	}
}

function botChoice(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}