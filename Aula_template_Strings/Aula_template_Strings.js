const caixa = document.querySelector('#caixa');

const curso = "JavaScript";
const canal = "CFB Cursos";

const carros = ["Polo", "Gol", "Uno", "HRV"];

let ol = "<ul>";

carros.map((el) => {
    ol += `<li>${el}</li>`;
});

ol += "</ul>";

// const frase = "Este é o curso de " + curso + " do canal " + canal;
// const frase = `Este é o curso de ${curso} do canal ${canal}`;

caixa.innerHTML = ol;
