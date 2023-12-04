/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return (l1*l2);
}
console.log(area(15, 20));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
    let somma = (n1 + n2);
    if (n1 === n2) {
        return somma*3;
    } else {
        return somma;
}}

console.log(crazySum(20, 20));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19)*3;
    if (numero > 19) {
        return differenza*3;
    } else {
        return differenza;
}}

console.log(crazyDiff(57));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return (n >= 20 && n <= 100 || n === 400) 
}

console.log(boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    let risultato = stringa;
    if (stringa.startsWith("EPICODE")) {
        return risultato;
    } else {
        return 'EPICODE' + risultato;
}}

console.log(epify("EPICODE1234567890"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    return stringa.reverse()
}

console.log(reverseString("EPICODE1234567890"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringhe) {
    const parole = stringhe.split(' ');
    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i][0].toUpperCase() + parole[i].slice(1);
    }}

    console.log(upperFirst('Hello world'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(mystring) {
    return mystring.slice(1, -1);
}

console.log(cutString('Hello World!'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let myRandomArray = [];
    for (let i = 0; i < n; i++) {
        const random = Math.floor(Math.random() * 10 + 1);
        myRandomArray.push(random);
    }

    return myRandomArray;
}

console.log(giveMeRandom(10));