// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var richiesta = prompt("Scegli pari o dispari").toLowerCase();
console.log(richiesta);

while (richiesta != "pari" && richiesta != "dispari") {
  var richiesta = prompt("Devi scegliere pari o dispari!");
}

if (richiesta === "pari") {
  alert("Hai scelto pari.")
} else
  alert("Hai scelto dispari.")

var numero = parseInt(prompt("Ora scegli un numero da 1 a 5"));
console.log(numero);

while (isNaN(numero)) {
  var numero = parseInt(prompt("Non mi hai dato un numero!"))
}

if (numero <=0 || numero >5) {
  var numero = parseInt(prompt("Mi serve un numero da 1 a 5!"))
}

var computer = random(1,5);
alert("il computer ha scelto il numero: " + computer);

var somma = add(numero, computer);
alert("La somma dei due numeri è: " + somma + " quindi...");

if (pari(somma)) {
  alert("Vince il pari!");
} else {
  alert("Vince il dispari!");
}




// funzioni
function random(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function add(num1,num2){
  return parseInt(num1 + num2);
}

function pari(num1){
  return (num1%2 == 0);
}
