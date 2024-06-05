//Dobbiamo trovare il prezzo del biglietto del treno per una persona avendo: un prezzo fisso per chilometro pari a 0,21€;
//Inizializzo variabili generali
let ticketprice;
let discountMinorenni;
let discountOver65;
//Chiedi all'utente quanti chilometri deve percorrere;
const kmToTravel = parseInt(prompt("Inserire quanti chilometri devi percorrere"));
// Chiedi all'utente la sua età;
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log("L'utente percorre",kmToTravel,"km","L'utente ha: ",userAge,"il prezzo al km è pari a 0,21€")
// Calcola il prezzo del biglietto sapendo che il prezzo al chilometro è pari a 0.21€;
let prezzo = (kmToTravel * 0.21).toFixed(2)+"€";
ticketprice = prezzo
console.log("il prezzo del biglietto è pari a",prezzo);
//Applica eventuali sconti;
if(userAge < 18){
    //Applicare lo sconto del 20% se l'user è minorenne;
    discountMinorenni = (prezzo - ((prezzo * 20) / 100));
    ticketprice = discountMinorenni
    console.log("prezzo del tuo biglietto ridotto =",discountMinorenni);
}else if (userAge > 65){
    //Applichiamo uno sconto del 40% per gli utenti maggiori di 65 anni
    discountOver65 = (prezzo - ((prezzo * 40) / 100));
    ticketprice = discountOver65;
    console.log("Prezzo finale=",discountOver65);
}else {
    ticketprice = prezzo;
}
//Mostrare i dati al cliente 
document.getAnimations('Name').innerHTML;
document.getElementById('km-drive').innerHTML ="km da prcorrere"+kmToTravel;
document.getElementById('user_Age').innerHTML = "La tua età: "+userAge;
document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto è: "+ ticketprice;
