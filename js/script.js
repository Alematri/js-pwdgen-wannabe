const nome = prompt ('inserisci il tuo nome');
const cognome = prompt ('inserisci il tuo cognome');
const colore = prompt ('inserisci il tuo colore preferito');

const password = nome + cognome + colore + 23;

const message = 'La tua password è: ' + password;

document.getElementById('output').innerHTML = message;