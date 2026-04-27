const divTodas= [...document.querySelectorAll("div")]
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursosEspeciais = document.getElementById("c1")

const query_divClass = [...document.querySelectorAll("div[class]")] //Divs que contem o atributo classe
const query_divP = [...document.querySelectorAll("div > p")] //Selecionando o atributo p dentro da div
const query_divTodas = [...document.querySelectorAll("div")]
const query_cursoTodos = [...document.querySelectorAll(".curso")]
const query_cursoC1 = [...document.querySelectorAll(".c1")]
const query_cursoC2 = [...document.querySelectorAll(".c2")]
// const query_cursosEspeciais = document.querySelectorAll("#c1")
const query_cursosEspeciais = document.querySelectorAll("#c1")[0]



// console.log(query_divTodas)
// console.log(query_cursoTodos)
// console.log(query_cursoC1)
// console.log(query_cursoC2)
// console.log(query_cursosEspeciais)


// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursosEspeciais)

// cursoC2.map((el) => {
//     el.classList.add("destaque")
// })