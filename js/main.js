/*  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
    Questo richiederà un minimo di ricerca. 
*/

const numKilometers = parseInt(prompt('Quanti chilometri devi percorrere?'));
const etaPassenger = parseInt(prompt('Inserisci la tua età'));
let priceTicket = 0;


console.log(
    `L'utente vuole percorrere ${numKilometers} Km 
ed ha ${etaPassenger} anni`);
document.getElementById('my-num-km').innerHTML = numKilometers;
document.getElementById('my-age').innerHTML = etaPassenger;


if (etaPassenger < 18)
{
    priceTicket = (numKilometers * 0.21);
    // priceTicket = (numKilometers * 0.21) - 20%;
    console.log(`L'utente è minorenne, applico uno sconto del 20%. Costo totale: ${priceTicket}Euro.`);
} else if (etaPassenger > 65){
    priceTicket = (numKilometers * 0.21);
    // priceTicket = (numKilometers * 0.21) - 40%;
    console.log(`L'utente è un over 65, applico uno sconto del 40%. Costo totale: ${priceTicket}Euro.`);
} else {
    priceTicket = (numKilometers * 0.21);
    console.log(`Non ci sono esenzioni, il costo del biglietto è di ${priceTicket}Euro.`);
}


