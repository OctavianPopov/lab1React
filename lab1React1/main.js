//7.2

const { adunare, scadere } = require('./MathUtils');

let num1 = 10;
let num2 = 5;

let suma = adunare(num1, num2);
let diferenta = scadere(num1, num2);

console.log(`Suma lui ${num1} și ${num2} este: ${suma}`);
console.log(`Diferența dintre ${num1} și ${num2} este: ${diferenta}`);

//7.4

const salutaUtilizator = require('./salutari');

let nume = "Octavian";

console.log("Mesaj pentru utilizator:");
salutaUtilizator();
console.log(`Salut, ${nume}!`);

//6.6

const salutaUtilizator1 = require('./salutari');

async function salutAsincron() {

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    
    salutaUtilizator1();

    
    console.log("Salut asincron finalizat!");
}

salutAsincron();

//7.5

const { nume: numeUtilizator, varsta: varstaUtilizator, oras: orasUtilizator } = require('./dateUtilizator');

console.log(`Nume: ${numeUtilizator}`);
console.log(`Vârsta: ${varstaUtilizator}`);
console.log(`Oraș: ${orasUtilizator}`);

//7.6

const dateUtilizator = require('./dateUtilizator');

console.log(`Nume: ${dateUtilizator.nume}`);
console.log(`Vârsta: ${dateUtilizator.varsta}`);
console.log(`Oraș: ${dateUtilizator.oras}`);
