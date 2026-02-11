//Sarcina 5

document.getElementById("titlu").textContent = "Titlu Nou";

//5.2

document.querySelectorAll("li").forEach(function(element) {
    element.style.color = "red";
});

//5.3

let paragrafNou = document.createElement("p")

paragrafNou.textContent = "Paragraf nou"

document.getElementById("container").appendChild(paragrafNou);

//5.4

document.getElementById("imagine").src = "https://www.w3schools.com/w3images/fjords.jpg";

//5.5

document.getElementById("box").classList.add("active");

//5.6

let p = document.getElementById("paragrafdelete");
if (p) {
    p.remove();
}

//5.7

document.getElementById("btnSchimbaH2").addEventListener("click", function() {
    document.getElementById("subtitlu").textContent = "Textul H2 a fost schimbat!";
});

//5.8

document.getElementById("inputText").addEventListener("input", function() {
    document.getElementById("liveText").textContent = this.value;
});

//5.9

let lista = document.getElementById("listaCopii");
let primul = lista.firstElementChild.textContent;
let ultimul = lista.lastElementChild.textContent;

document.getElementById("primUltim").textContent = `Primul: ${primul}, Ultimul: ${ultimul}`;

//5.10

document.getElementById("btnActive").addEventListener("click", function() {
    document.getElementById("box").classList.toggle("active");
});

//5.11

let tabel = document.createElement("table");

tabel.style.borderCollapse = "collapse";

for (let i = 0; i < 3; i++) {
    let rand = tabel.insertRow();
    for (let j = 0; j < 2; j++) {
        let cell = rand.insertCell();
        cell.textContent = `R${i+1}C${j+1}`;
        cell.style.border = "1px solid black"; 
        cell.style.padding = "5px";
    }
}

document.getElementById("tabelContainer").appendChild(tabel);

//5.12

document.getElementById("btnAdauga").addEventListener("click", function() {
    let valoare = document.getElementById("inputLista").value;

    if (valoare.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = valoare;
        document.getElementById("listaDinamica").appendChild(li);
        document.getElementById("inputLista").value = "";
    }
});