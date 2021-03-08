// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inserisci una parola").toLowerCase();

var parolaSplit = split(parola);
console.log(parolaSplit);

var parolaReverse = reverse(parola);
console.log(parolaReverse);

var parolaRevJoin = join(parola);
console.log(parolaRevJoin);


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
