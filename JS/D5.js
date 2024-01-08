/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
/* pets.forEach(element => {
  console.log(element)
}); */
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log(pets)
/* let cat = pets.splice(0,1)
console.log(cat)
pets.unshift(cat)
console.log(pets) */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = (pets.length - 1); i >= 0; i--) {
  console.log(pets[i])
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift())
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(element => {
  element.licensePlate = "000";
  console.log(element)
});


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: 'Tesla',
  model: 'Model S',
  color: 'grey',
  trims: ['single', 'double'],
}

cars.push(newCar)

cars.forEach(element => {
  element.trims.pop()
})

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift())
}
console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz")
  }
  else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] !== 32) {
    console.log(numericArray[i])
  }
  else {
    console.log(numericArray[i]);
    break
  }
}
/* Avevo scritto while al posto di if e stava succedendo qualcosa di interessante... */


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let positionArray = []
charactersArray.forEach(element => {
  if (element == "d") {positionArray.push("4")}
  else if (element == "g") {positionArray.push("7")}
  else if (element == "n") { positionArray.push("12") }
  else if (element == "u") { positionArray.push("19") }
  else if (element == "z") { positionArray.push("21") }


})

console.log(positionArray)


/* Non ho più familiarità con la sintassi dei cicli while e dei costrutti switch */