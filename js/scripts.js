//Chiedo nome all'utente
const nome = prompt ('Digita il tuo nome di seguito');
console.log("Il nome dell'utente è: ", nome);

let 

//Chiedo cognome all'utente
const cognome = prompt ('Digita il tuo cognome di seguito');
console.log("Il cognome dell'utente è: ", cognome);

//Chiedo colore preferito dell'utente
const colore = prompt ('Digita il tuo colore preferito di seguito');
console.log("Il colore preferito dell'utente è: ", colore);

//Creazione password
let psw = nome + cognome + colore + 21;
console.log('La password digitata è: ', nome + cognome + colore + 21);

//Visualizzazione password in HTML
document.getElementById('my-password').innerHTML = psw; 


//Da qui in avanti prove per rendere lowercase la password