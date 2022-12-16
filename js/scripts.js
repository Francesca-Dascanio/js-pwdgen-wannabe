//Chiedo nome all'utente
const nome = prompt ('Digita il tuo nome di seguito');
console.log("Il nome dell'utente è: ", nome.toLowerCase());

//Chiedo cognome all'utente
const cognome = prompt ('Digita il tuo cognome di seguito');
console.log("Il cognome dell'utente è: ", cognome.toLowerCase());

//Chiedo colore preferito dell'utente
const colore = prompt ('Digita il tuo colore preferito di seguito');
console.log("Il colore preferito dell'utente è: ", colore.toLowerCase());

//Creazione password
let psw = nome.toLowerCase() + cognome.toLowerCase() + colore.toLowerCase() + 21;
console.log('La password digitata è: ', nome.toLowerCase() + cognome.toLowerCase() + colore.toLowerCase() + 21);

//Visualizzazione password in HTML
document.getElementById('my-password').innerHTML = psw; 
