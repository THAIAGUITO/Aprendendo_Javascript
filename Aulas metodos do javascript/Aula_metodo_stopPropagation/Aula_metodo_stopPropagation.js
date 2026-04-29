const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evento) => {
    console.log("Clicou")
    console.log(evento)
})

// btn_c1.addEventListener("click", (evento) => {
//     evento.stopPropagation()
// })

cursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        evento.stopPropagation()
    })
})