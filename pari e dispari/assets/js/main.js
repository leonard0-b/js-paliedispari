// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedi pari o dispari
var domanda = prompt("Scegli pari o dispari");
console.log(domanda);
// chiedi un numero da uno a cinque

var flag = false;

while (!flag) {
  var domandaNumero = parseInt(prompt("Dammi un numero da 1 a 5"));
  if (domandaNumero > 5 || domandaNumero <= 0) {
    alert("Ti ho chiesto un numero da 1 a 5, maledetto");
  } else {
    var numRandom = random (1,5);
    console.log(numRandom);

    var somma = add (domandaNumero,numRandom);
    console.log(somma);

    var pari = pari(somma);
    console.log(pari);

    flag = true;
    if (pari) {
      console.log("Vince il pari!");
    } else {
      console.log("Vince il dispari");
    }
  }
}






// Funzioni
function random(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function add(num1,num2){
  return parseInt(num1 + num2);
}

function pari(num1){
  return (num1%2 == 0);
}
