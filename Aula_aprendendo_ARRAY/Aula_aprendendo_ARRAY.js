const caixa = document.querySelector("#caixa")

let cores = ["Azul", "Verde", "Vermelho",["claro", "escuro", "medio"]]
let cursos = ["HTML", "CSS", "JAVASCRIPT", cores]

// cursos[0] = "C++"
// cursos[0] = 2025


cursos.push("Python") // Adicionar no final do Array
// cursos.pop() ---- Tirar do final do Array

cursos.unshift("Ruby") // Adicionar no ínicio do Array
// cursos.shift() ------ Tirar do inicio do Array

console.log(cursos[4][3][2])


cursos.map((ele) => {
    let p = document.createElement("p")
    p.innerHTML = ele
    caixa.appendChild(p)
})