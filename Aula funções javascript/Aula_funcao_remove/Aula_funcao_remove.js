const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "MYSQL", "REACT NATIVE"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type = radio]")]
    let radioSelecionado = todosRadios.filter((elemento, indice, array) => {
        return elemento.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    } catch(erro){
        alert("Selecione um curso")
    }
    
})

btnRemoveCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if(rs==undefined){
        alert("Selecione um curso")
    }else{
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }
})

// parentNode
// ChildNodes[nodenumber]
// firtsChild
// lastChild
// nextSibling
// previousSibling