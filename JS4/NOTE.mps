// Sarasas yra masyvas. Masyvas yra sudarytas is objektu. 
   Kiekvienam objekte turi atributus ir pavadinimus.Nusiskaitysim Json faila
   ir bandysim konvertuoti i objekta.Pabandyti pereiti per objektus, kurie
   yra masyve ir issivesti pavadinimus.//

const fs = require("fs");
const str = fs.readFileSync("data.json").toString();

const sandelys = JSON.parse(str);

console.log(sandelys);

Pasileidimas terminale: $ node parduotuve.js


Sinchroninis komandos vykdymas:

Komandu vykdymas is eiles. Tik kai 
ivykdys pirma komanda, vykdys antra ir tt..

 komanda 1
 komanda 2
 komanda 3
 komanda 4


Asinchroninis vykdymas. 
komanda 1
komanda 2
komanda 3 (atsiusti faila)-> funkcija
komanda 4 

Asinchroninis vykdymas. 
komanda 1
komanda 2        loadJoke()
komanda 3 (atsiusti faila)-> funkcija
komanda 4 (atsiusti faila)-> funkcija

async function loadJoke(){
     await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
     await resp.json()
     ...
}


