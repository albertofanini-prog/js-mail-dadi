/*-----Verifica user-----*/

//Creare una lista esclusiva di user i quali possono accedere al servzio
let emails = [
    'alberto@gmail.com',
    'gianluca@gmail.com',
    'alessio@gmail.com',
    'massimo@gmail.com'
];
console.log(emails);

//Chiedere l'email all'user
let user = prompt('Benvenuto. Inserisci la tua mail per procedere.');
console.log(user);

//Dare un valore booleano alla variabile
let search = false;
console.log(search);

//Controllare che l'email riferita all'user sia nella lista esclusiva
for (let i = 0; i<emails.length; i++){
    if(user === emails[i]){
        search = true;
    }
}

//Stampare un messaggio per l'user con l'esito del controllo
if(search === true){
    alert('Dato corretto. Clicca su ok per proseguire.');
}   else{
        alert('Dato non corretto. Ricaricare la pagina.');
}

//Prendere elemento html in cui scrivere
//let firstHTML = document.querySelector('.users');
//firstHTML.innerHTML = `L'e-mail da lei inserita è:`;


/*-----Gioco dei dadi-----*/
//Generare due numeri random da 1 a 6
//Assegnare un numero al cpu e un numero all'user
//Stabilire il vincitore
//E se i numeri sono pari?