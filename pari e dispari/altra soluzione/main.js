// Lβutente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri Γ¨ pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// richiesta pari o dispari π±βπ€
var richiesta = prompt("Scegli pari o dispari").toLowerCase();
console.log(richiesta);

// se l'utente no digita ne pari ne dispari π±βπ€
while (richiesta != "pari" && richiesta != "dispari") {
  var richiesta = prompt("Devi scegliere pari o dispari!");
}

// se digita pari esce "hai scelto pari" altrimenti "hai scelto dispari" π±βπ€
if (richiesta === "pari") {
  alert("Hai scelto pari.")
} else
  alert("Hai scelto dispari.")

// chiedo numero da 1 a 5 π±βπ€
var numero = parseInt(prompt("Ora scegli un numero da 1 a 5"));
console.log(numero);

// deve essere per forza un numero π±βπ€
while (isNaN(numero)) {
  var numero = parseInt(prompt("Non mi hai dato un numero!"))
}

// se il numero non Γ¨ tra 1 e 5 π±βπ€
if (numero <=0 || numero >5) {
  var numero = parseInt(prompt("Mi serve un numero da 1 a 5!"))
}

// creo il numero random del computer π±βπ€
var computer = random(1,5);
alert("il computer ha scelto il numero: " + computer);

// faccio la somma dei due numeri π±βπ€
var somma = add(numero, computer);
alert("La somma dei due numeri Γ¨: " + somma + " quindi...");

// se la somma ha %2 resto 0 allora Γ¨ pari, altrimenti Γ¨ dispari π±βπ€
if (pari(somma)) {
  alert("Vince il pari!");
} else {
  alert("Vince il dispari!");
}




// funzioni π±βπ€π±βπ€π±βπ€
function random(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function add(num1,num2){
  return parseInt(num1 + num2);
}

function pari(num1){
  return (num1%2 == 0);
}
