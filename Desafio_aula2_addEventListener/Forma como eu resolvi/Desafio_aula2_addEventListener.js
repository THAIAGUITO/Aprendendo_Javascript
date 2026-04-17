const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn_copiar = document.getElementById("btn_copiar")
const btn_voltar = document.getElementById("btn_voltar")
const todos_cursos = [...document.querySelectorAll(".curso")]

todos_cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_copiar.addEventListener("click", () => {
    const cursos_selecionados = [...document.querySelectorAll(".selecionado")]
    cursos_selecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

btn_voltar.addEventListener("click", () => {
    const cursos_selecionados = [...document.querySelectorAll("#caixa2 > div")]
    cursos_selecionados.map((el) => {
        if (el.classList.contains("selecionado")) {

        } else {
            caixa1.appendChild(el)
        }
    })
})