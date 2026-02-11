//1.1
var a = 3;
let b = "";
const c = true;

//1.2
function typeof1(trakala) {
    console.log(typeof(trakala))
}

console.log(typeof1(a));

//1.3
let d = String(a);
let e = Number(d);

console.log(typeof(d));
console.log(d);
console.log(typeof(e));
console.log(e);

//1.4
let nume = "Octavian";
let varsta = 20;
let propozitie = (`Eu sunt ${nume} si am ${varsta} ani`);
console.log(propozitie);

//1.5
let a1 = 1;
let b1 = 2;
let temp = a1;
a1 = b1;
b1 = temp;

//1.6
let c1 = null;
function null_undefined(variabila) {
    if (variabila == null || variabila == undefined) {
        console.log("Variabila data este null sau undefined")
    }
}

console.log(null_undefined(c1));

//1.7
let object1 = {
    nume: "Octavian",
    varsta: 20,
    Student: true,
};

console.log(object1);

object1.facultate = "informatica";

console.log("Dupa adaugare", object1);

delete object1.varsta;

console.log("dupa stergere", object1);

//1.8
let arr = [1, "abc", true, 1n, {nume: "Octavian"}];

for (let i=0; i<arr.length; i++) {
    console.log(typeof(arr[i]))
}


//Sarcina 2

function suma(a,b) {
    return a+b;
}

console.log(suma(a1, temp));

//2.2
let latime = 5;
function aria(inaltime, latime) {
    if (inaltime == undefined) {
        inaltime = 1;
    }

    return inaltime*latime;
}

console.log(aria(undefined, latime));
console.log(aria(a,latime));

//2.3

let patrat_1 = function(numar) {
    return numar * numar;
}

console.log(patrat_1(9));

//2.4

function str1(string1) {
    let string1_UP = string1.toUpperCase();
    console.log(string1_UP);
    return string1.length;
}

console.log(str1("abcd"));

//2.5

function dublu(numar) {
    return numar*2;
}

function patrat(numar) {
    return numar*numar;
}

function principal(numar) {
    return {
        dublu: dublu(numar),
        patrat: patrat(numar)
    }
}

console.log(principal(7));

//2.6

let suma_1 = (a,b) => {
    return a+b
}

console.log(suma_1(a1, temp))

//2.7
let arr2 = [1, 2, 3];

function aplica(array, functie) {
    let rez = [];

    for (let i = 0; i < array.length; i++) {
        rez.push(functie(array[i]))
    }

    return rez;
}

console.log(aplica(arr2, dublu));

// alta metodaa

function aplica1(array, functie) {
    return array.map(functie);


}

console.log(aplica1(arr2, x => x * x));

//Sarcina 3

let masina = {
    marca: "Audi",
    model: "Q8",
    an: 2025
}

//3.2

console.log(masina.marca)
console.log(masina.model)

console.log(masina["marca"])
console.log(masina["model"])

//3.3

masina.culoare = "Alba";
masina.an = 2026;

console.log(masina);

//3.4

delete masina.model;

console.log(masina);

//3.5
for (let i in masina) {
    console.log(i + ": " + masina[i])
}

//3.6

masina.descriere = function() {
    return `Masina este ${this.marca}, fabricata in ${this.an}, de culoarea ${this.culoare}`
}

console.log(masina.descriere());

//3.7

let persoana1 = {
    nume: "Popov",
    varsta: 20
}

function persoana(persoana) {
    return `Numele este ${persoana.nume} si are varsta de ${persoana.varsta}`
}

console.log(persoana(persoana1));

//3.8

if ("culoare" in masina) {
    console.log("culoarea este", masina.culoare)
} else {
    console.log("Masina nu are culoare")
}


//3.9

let casa = {
    adresa: {
        strada: "Trandafirilor",
        oras: "Cantemir"
    }
}

console.log(casa);

//3.10

function Student1(Nume, varsta, nota) {
    let Student = {
        nume: Nume,
        varsta: varsta,
        nota: nota
    }

    return Student;
}

console.log(Student1("Popov Ocatvian", 20, 10))

//3.11

let masinaClona1 = Object.assign({}, masina)
console.log(masinaClona1)

let masinaClona2 = {...masina}
console.log(masinaClona2);

//3.12

let calculator = {
    adunare: function(a,b) {
        return a+b
    },

    scadere: function(c,d) {
        return c-d
    },

    inmultire: function(e,f) {
        return e*f
    },

    impartire: function(g,h) {
        if (h !== 0) {
        return g/h
        } else {
        return "eroare"
        }
    }
}

//3.13

let {marca, culoare} = masina;
let {adresa} = casa;

console.log(marca)
console.log(culoare)
console.log(adresa)

//Sarcina 4

let array_orase = ["Cantemir", "Chisinau", "Cahul"]

console.log(array_orase[0], array_orase[array_orase.length - 1])

//4.2

array_orase.push("Balti");
console.log(array_orase)
array_orase.unshift("Hancesti");
console.log(array_orase)
array_orase.pop();
console.log(array_orase)

//4.3

arr_culori = ["Negru", "Albastru", "Verde", "Galben"];

for (i = 0; i<arr_culori.length; i++) {
    console.log(arr_culori[i])
}

//4.4

let animale = ["Caine", "Pisica", "Ponei"]
animale.forEach(animal => console.log(`Animalul meu preferat este: ${animal}`));

//4.5

let peste10 = array => array.filter(numar => numar > 10);

console.log(peste10([5, 12, 8, 20, 3]));

//4.6

let numere = [25, 3, 42, 10, 7];

numere.sort((a,b) => a - b)
console.log(numere);

//4.7

let patrat2 = array => array.map(numar => numar * numar);

console.log(patrat2([1, 2, 3, 4, 5]));

//4.8

let suma2 = numere.reduce((total, numar) => total+numar, 0)
console.log(suma2)

//4.9

if (array_orase.includes("Chisinau")) {
    console.log("Chisinau este")
} else {
    console.log("Chisinau nu-i")
}

if (array_orase.indexOf("Cantemir") !== -1) {
    console.log("Cantemir este in array")
} else {
    console.log("Cantemir nu este in array")
}

//4.10

let arrFructe = ["Piersici", "Mere"]
let arrLegume = ["Rosii", "Morcovi"]

let arrCombine1 = arrFructe.concat(arrLegume);

console.log(arrCombine1)

let arrCombine2 = [...arrFructe, ...arrLegume];

console.log(arrCombine2);

//4.11

let matrice = [
    [1,2],
    [3,4]
]
//linia 1 (indexul 0), coloana 2 (indexul 1)
let element1 = matrice[0][1]
console.log(element1);

//linia 1(indexul 1), coloana 2 (indexul 1)

let element2 = matrice[1][1]
console.log(element2)

//4.12

function duplicate(array) {
    return array.filter((val, index) => array.indexOf(val) === index);
}

let numere3 = [1, 2, 2, 3, 4, 4, 5];
console.log(duplicate(numere3)); 

//4.13

let arrNumere4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrNumere4);
let subArrNum4 = arrNumere4.slice(3,7);
console.log(subArrNum4);

subArrNum4.splice(2,1)
console.log(subArrNum4);

//Sarcina 6

setTimeout(function() {
    console.log("Au trecut 3 secunde!");
}, 3000);

//6.2

let numar = 1;

let interval = setInterval(function() {
    console.log(numar);
    numar++;

    if (numar > 5) {
        clearInterval(interval);
    }
}, 1000);

//6.3

function salut(callback) {
    console.log("Salut!");
    if (typeof callback === "function") {
        callback();
    }
}

function mesajExtra() {
    console.log("Acesta este callback-ul!");
}

salut(mesajExtra);

//6.4

function promise2Sec() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promisiunea s-a rezolvat după 2 secunde!");
        }, 2000);
    });
}

promise2Sec().then((mesaj) => {
    console.log(mesaj);
});

//6.5

function promiseParam(param) {
    return new Promise((resolve, reject) => {
        if (param) {
            resolve("Promisiunea a fost rezolvată!");
        } else {
            reject("Promisiunea a fost respinsă!");
        }
    });
}

promiseParam(true)
    .then((mesaj) => {
        console.log("Success:", mesaj);
    })
    .catch((eroare) => {
        console.log("Eroare:", eroare);
    });

promiseParam(false)
    .then((mesaj) => {
        console.log("Success:", mesaj);
    })
    .catch((eroare) => {
        console.log("Eroare:", eroare);
    });

//6.7

function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Rezultat 1"), 1000);
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Rezultat 2"), 1000);
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Rezultat 3"), 1000);
    });
}

promise1()
    .then((rez1) => {
        console.log(rez1);
        return promise2(); 
    })
    .then((rez2) => {
        console.log(rez2); 
        return promise3(); 
    })
    .then((rez3) => {
        console.log(rez3);
    })
    .catch((eroare) => {
        console.error("Eroare:", eroare);
    });

//6.8

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Date preluate:", data);
    })
    .catch(error => {
        console.error("A apărut o eroare:", error);
    });

//6.9

function promisiuneA() {
    return new Promise((resolve) => setTimeout(() => resolve("A rezolvat"), 1000));
}

function promisiuneB() {
    return new Promise((resolve, reject) => setTimeout(() => reject("B respins"), 1500));
}

function promisiuneC() {
    return new Promise((resolve) => setTimeout(() => resolve("C rezolvat"), 500));
}

Promise.all([promisiuneA(), promisiuneB(), promisiuneC()])
    .then((rezultate) => {
        console.log("Promise.all rezultate:", rezultate);
    })
    .catch((eroare) => {
        console.log("Promise.all eroare:", eroare);
    });

Promise.allSettled([promisiuneA(), promisiuneB(), promisiuneC()])
    .then((rezultate) => {  // <--- aici folosim exact 'rezultate'
        console.log("Promise.allSettled rezultate:");
        rezultate.forEach((r, i) => {
            console.log(`Promisiunea ${i+1}:`, r.status, r.value || r.reason);
        });
    });

//Sarcina 7

const { adunare, scadere } = require('./MathUtils');

console.log(adunare(5, 3)); 
console.log(scadere(5, 3)); 
























    
