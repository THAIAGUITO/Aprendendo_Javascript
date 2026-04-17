const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn_transferir = document.getElementById("btn_transferir")
const todos_cursos = [...document.querySelectorAll(".curso")]

todos_cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click", () => {
    const cursos_selecionados = [...document.querySelectorAll(".selecionado")]
    const cursos_nao_selecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursos_selecionados.map((el) => {
        caixa2.appendChild(el)
    })
    cursos_nao_selecionados.map((el) => {
        caixa1.appendChild(el) 
    })
})