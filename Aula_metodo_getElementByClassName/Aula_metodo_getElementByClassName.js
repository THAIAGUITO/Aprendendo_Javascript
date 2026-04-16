const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursosEspeciais = document.getElementsByClassName("curso")[5]

console.log(cursoTodos)
console.log(cursoC1)
console.log(cursoC2)
console.log(cursosEspeciais)

cursoC2.map((el) => {
    el.classList.add("destaque")
})