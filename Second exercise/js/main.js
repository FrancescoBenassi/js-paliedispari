// /# Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1) Chiedere all'utente pari o dispari con prompt

alert('Scegliere tra "pari" e "dispari"');
const chooseUser = prompt('Scrivere "pari" o "dispari"');
console.log(chooseUser);

// 2) Chiedere all'utente un numero da 1 a 5

alert('Scrivi un numero tra 1 e 5');
const numberUser = prompt('Scrivi un numero tra 1 e 5');
console.log(numberUser);

// 3) Creiamo una variabile con il risultato della funzione e decreta se hai vinto o perso

const result = evenOdd(numberUser);
console.log(result);

// 4) Creiamo una funzione per validare se l'utente ha perso o no contro il computer
//     - Creiamo una variabile con un numero random
//     - Sommare il numero dell'utente con quello del computer
//     - Validare se è un numero pari o dispari
//     - In base a cosa ha scelto l'utente stampare se l'utente ha vinto o perso 

/**
 * La funzione prende 2 numeri da numberUser e numerRandom li somma, controlla se sono pari o dispari ed infine decreta se hai vinto o perso
 * @param {number} numberUser
 * @returns {string} 'Hai vinto' o 'Hai perso'
 */

function evenOdd(numberUser) {

    let numberRandom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    console.log(numberRandom);

    let sum = numberUser + numberRandom;
    
    let resultEvenOdd = '';
    
    if (sum % 2 === 0) {
        resultEvenOdd = 'pari';
    } else {
        resultEvenOdd = 'dispari';
    }

    if (chooseUser === resultEvenOdd) {
        resultEvenOdd = 'Hai vinto';
    } else {
        resultEvenOdd = 'Hai perso';
    }
    
    return resultEvenOdd;
}
