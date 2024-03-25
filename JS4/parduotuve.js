// Jei norime gauti info is data.json sarasa, kuris yra masyvuose.

const fs = require("fs");
const str = fs.readFileSync("data.json").toString();

const sandelys = JSON.parse(str);

// console.log(sandelys);


// Terminale parasius $node parduotuve.js ismes mus sarasa is data.json

//  Jei noretume išvesti tik prekių pavadinimų sąrašą.

// sandelys.forEach((preke) => {
//     console.log(preke.pavadinimas);
// })

// terminale duoda visas prekes is objekto pavadinimas.
// Pvz:
// Kavos puodelis
// Dviratis
// Televizorius

// Jei norime gauti prekiu kainas prie kiekvieno is saraso:

// sandelys.forEach((preke) => {
//     console.log(`${preke.pavadinimas}, kaina: ${preke.kaina} EUR`);
// })

// Jei norime suskaiciuoti suma kiek yra sandelyje.
// Kadangi kiekis yra masyvas, todel nurodome ka imsime, koki skaiciu. 
// Pradedame nuo 0, todel ir imsime 0. Kadangi norime gauti ju suma
//  galime papildomai pasirasyti cikla.

sandelys.forEach((preke) => {
    let suma = 0;
    preke.kiekis_sandelyje.forEach((kiekis) => {
        suma = suma + kiekis;
    })
    console.log(`${preke.pavadinimas}, kaina: ${preke.kaina} EUR, kiekis: ${suma}`);
})

// 