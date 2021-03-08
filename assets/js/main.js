// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo parola 🐱‍👤
var parola = prompt("Inserisci una parola").toLowerCase();

// divido i caratteri in un arrey 🐱‍👤
var parolaSplit = split(parola);
console.log(parolaSplit);

// faccio il reverse delle lettere 🐱‍👤
var parolaReverse = reverse(parola);
console.log(parolaReverse);

// le riunisco in una stringa 🐱‍👤
var parolaRevJoin = join(parola);
console.log(parolaRevJoin);

// se la parola è uguale alla parola reverse allora è palindroma 🐱‍👤
if (parola === parolaRevJoin) {
  alert("La parola è palindroma");
} else
  alert("La parola non è palindroma");


// Funzioni
function split(parola){
  var parolaSplit = parola.split("");
  return parolaSplit;
}

function reverse(parola){
  var parolaReverse = parolaSplit.reverse("");
  return parolaReverse;
}

function join(parola){
  var parolaJoin = parolaReverse.join("");
  return parolaJoin;
}
