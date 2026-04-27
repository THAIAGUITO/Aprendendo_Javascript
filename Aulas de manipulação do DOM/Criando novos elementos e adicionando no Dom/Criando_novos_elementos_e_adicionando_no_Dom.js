const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "MYSQL", "REACT NATIVE"]

cursos.map((el, chave) => {
    const novo_elemento = document.createElement("div")
    novo_elemento.setAttribute("id", "c" +chave)
    novo_elemento.setAttribute("class", "curso c1")
    novo_elemento.innerHTML = el
    caixa1.appendChild(novo_elemento)
})