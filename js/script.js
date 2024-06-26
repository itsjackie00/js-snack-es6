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
// const guestName = [
//     'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',
//     'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
// ];
//console.log(guestName);

//variabile per il segnalaposto
// const segnalaPosto = []

//creo un ciclo for dove pusho per ciascun invitato il nome del tavolo,
//e il posto occupato.
// for (let i = 0; i < guestName.length; i++) {
//     segnalaPosto.push({
//         tavolo: 'Tavolo VIP',
//         guest: guestName[i],
//         place: i + 1
//     })
// }
//console.log(segnalaPosto);


/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso,
dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/


//Creo un arrai per i studenti indicando id,nome e voto
// const student = [
//     {id: 110, nome: 'Paola Cortellessa', voti: 96},
//     {id: 250, nome: ' Andrea Mantegna', voti: 48},
//     {id: 145, nome: 'Gaia Borromini', voti: 74},
//     {id: 196, nome: ' Luigi Grimaldello', voti: 68},
//     {id: 102, nome: ' Piero della Francesca', voti: 50},
//     {id: 120, nome: ' Francesca da Polenta', voti: 84},
//     {id: 213, nome: ' Marco della Rovere', voti: 78}
// ];
// console.log(student);

// //student name to uppercase
// const uppercase = student.map((studente) => studente.nome.toUpperCase ());
// console.log(uppercase);


// //filtro i studenti con i voti superiori a 70
// const gradeOver70 = student.filter((studente) => studente.voti > 70);
// console.log(gradeOver70);

// //filtro i studenti con voti superiori a 70
// // e id superiore a 120
// const gradeAndId = student.filter ((studente) => studente.voti > 70 && studente.id > 120);
// console.log(gradeAndId);


/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal.
*/

//creao un array di oggetti che descriveranno le bici con nome e peso.
// const bici = [
//     {nome: 'Giant Propel', peso: 6.5},
//     {nome: 'Scott Addict RC Ultimate', peso: 7},
//     {nome: 'Specialized S-Works Aethos', peso: 6.36},
//     {nome: 'Wilier Zero SLR', peso: 6.8},
//     {nome: 'Orbea Orca M10iLTD PWR', peso: 6.64},
//     {nome: 'Look 795 Blade RS', peso: 7},
//     {nome: 'Giant Propel', peso: 6},
//     {nome: 'Scott Addict RC Ultimate', peso: 5},
//     {nome: 'Specialized S-Works Aethos', peso: 6.32},
//     {nome: 'Wilier Zero SLR', peso: 6.81},
// ];
// //console.log(bici);

// //stampo le bici con peso minore utilizzando destructuring e template literal.
// const biciMin = bici.filter((bici) => bici.peso <= 5);
// console.log(biciMin);

/*
SNACK 4
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
*/

//Creo un array di oggetti di squadre di calcio
let soccerTeam = [
    {nome : 'Atalanta', puntiFatti: 0, falliSubiti: 0},
    {nome : 'Bologna', puntiFatti:0, falliSubiti:0},
    {nome : 'Cagliari', puntiFatti:0, falliSubiti:0},
    {nome : 'Genova', puntiFatti: 0, falliSubiti:0},
    {nome : 'Inter', puntiFatti: 0, falliSubiti:0},
    {nome : 'Juventus', puntiFatti:0, falliSubiti:0},
    {nome : 'Lazio', puntiFatti:0, falliSubiti:0},
    {nome : 'Milan', puntiFatti: 0, falliSubiti:0},
];
//console.log(soccerTeam);

//genero numeri random al posto degli 0 nelle proprietà.
for (let i = 0; i < soccerTeam.length; i++) {
    soccerTeam[i].puntiFatti = getRndInteger(0,50);
    soccerTeam[i].falliSubiti = getRndInteger(0,35);
}
console.log(soccerTeam);

//creao un nuovo array i cui elementi contengono solo nomi e falli subiti.
const soccerTeamNames = soccerTeam.map((soccerTeam) => soccerTeam.nome + ' ' + soccerTeam.falliSubiti) ;
console.log(soccerTeamNames);

//Stampo i risultati in DOM
const tabella = document.createElement("table");
const tbody = document.createElement("tbody");

let i = 0;
for(let squadra of soccerTeamNames) {
  const tr = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdFalliSubiti = document.createElement("td");

  tdNome.textContent = soccerTeam[i].nome;
  tdFalliSubiti.textContent = soccerTeam[i].falliSubiti;

  tr.appendChild(tdNome);
  tr.appendChild(tdFalliSubiti);

  tbody.appendChild(tr);
  i++;
};

tabella.appendChild(tbody);
document.body.appendChild(tabella);