// # Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// 1) Chiedere all'utente una parola usando prompt()

const word = prompt('Scrivi una parola');
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
 * La funzione serve per invertire la parola data creando una variabile all'interno della funzione, confrontarla alla parola originale usando if ed infine stampare la stringa appropriata
 * @param {string} word 
 * @returns {string} 
 */

function validator(word) {
    const wordReverse = word.toLowerCase().split('').reverse().join('');
    let result = '';
    if(word === ''){
        alert('Non è stata inserita nessuna parola');
    } else if (word === wordReverse) {
        result = 'la parola è palindroma';
    }
    else {
        result = 'la parola non è palindroma';
    }
    return result;
}