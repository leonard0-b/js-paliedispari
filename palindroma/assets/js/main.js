// Chiedere allβutente di inserire una parola
// Creare una funzione per capire se la parola inserita Γ¨ palindroma

// chiedo parola π±βπ€
var parola = prompt("Inserisci una parola").toLowerCase();

// divido i caratteri in un arrey π±βπ€
var parolaSplit = split(parola);
console.log(parolaSplit);

// faccio il reverse delle lettere π±βπ€
var parolaReverse = reverse(parola);
console.log(parolaReverse);

// le riunisco in una stringa π±βπ€
var parolaRevJoin = join(parola);
console.log(parolaRevJoin);

// se la parola Γ¨ uguale alla parola reverse allora Γ¨ palindroma π±βπ€
if (parola === parolaRevJoin) {
  alert("La parola Γ¨ palindroma");
} else
  alert("La parola non Γ¨ palindroma");


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
