// Faile studentai.json pateikiamas JSON formatu studentų
// sąrašas(masyvas), jų duomenys ir pažymiai.
// Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:
// 1. Studentų kiekį
// 2. Studentų amžiaus vidurkį
// 3. Studentų pažangumo vidurkį(visų pažymių vidurkį)
// 4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
// Jonas Jonaitis 5.5
// Petras Petraitis 9.3

// Studentu kiekis:

const fs = require("fs");
const str = fs.readFileSync("data2.json").toString();

const studentai = JSON.parse(str);

console.log(`studentu kiekis: ${studentai.length}`);

// Studentų amžiaus vidurkį:

studentai.forEach((studentas) => {
    let suma = 0;
    studentas.amzius.forEach((kiekis) => {
        suma = suma + kiekis;
    })
    console.log(`Visu studentu suma: ${suma}`);
})

