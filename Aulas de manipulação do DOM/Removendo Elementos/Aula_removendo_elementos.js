const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REAC", "MYSQL", "REAC NATIVE"]

cursos.map((el, chave) => {
    const novo_elemento = document.createElement("div")
    novo_elemento.setAttribute("id", "c" + chave)
    novo_elemento.setAttribute("class", "curso")
    novo_elemento.innerHTML = el

    const btn_lixeira = document.createElement("i")
    btn_lixeira.setAttribute("class", "fa-regular fa-trash-can")
    btn_lixeira.setAttribute("style", "cursor: pointer")
    novo_elemento.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })

    novo_elemento.appendChild(btn_lixeira)

    // novo_elemento.addEventListener("click", (evt) => {
    //     caixa1.removeChild(evt.target)
    // })

    caixa1.appendChild(novo_elemento)
})