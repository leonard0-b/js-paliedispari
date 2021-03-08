// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inserisci una parola");

var parolaSplit = split(parola);
console.log(parolaSplit);

var parolaReverse = reverse(parola);
console.log(parolaReverse);

var parolaRevJoin = join(parola);
console.log(parolaRevJoin);

console.log(join(parola));

// if (reverse(parola) === parolaRevJoin) {
//   alert("La parola è palindroma");
// } else
//   alert("La parola non è palindroma");
//

// Funzioni
function split(parola){
  return parola.split("");
}

function reverse(parola){
  return parolaSplit.reverse("");
}

function join(parola){
  return parolaReverse.join("");
}
