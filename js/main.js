// # Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// 1) Chiedere all'utente una parola usando prompt()

const word = prompt();
console.log(word);

// 2) Creare una variabile per avere il risultato della funzione

const resultWord = validator(word);
console.log(resultWord);

// 3) Creare una funzione per capire se la parola inserita è palindroma
//     - Creare una variabile con la parola inversa
//     - Confrontare le 2 parole (quella originale e quella inversa)
//     - Se le 2 parole corrispondono la parola originale è palindorma altrimenti non lo è

///////////////

/**
 * La funzione serve per invertire la parola data creando una variabile, confrontarla alla parola originale usando if ed infine stampare la stringa appropriata
 * @param {string} word 
 * @returns {string} 
 */

function validator(word) {
    const wordReverse = word.toLowerCase().split('').reverse().join('');
    let result = '';
    if (word === wordReverse) {
        result = 'la parola è palindroma';
    } else {
        result = 'la parola non è palindroma';
    }
    return result;
}

// # Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.