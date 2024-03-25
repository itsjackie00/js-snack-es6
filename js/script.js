// alert('hello');

//CONSEGNA

/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  
'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, 
per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

//Creao un array per la lista degli invitati
const guestName = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  
'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];
console.log(guestName);

//variabile per il segnalaposto
const segnalaPosto = []

//creo un ciclo for dove pusho per ciascun invitato il nome del tavolo,
//e il posto occupato.
for (let i = 0; i < guestName.length; i++) {
segnalaPosto.push({
    tavolo : 'Tavolo VIP',
    guest : guestName[i],
    place : i + 1
})
}   
 console.log(segnalaPosto);
