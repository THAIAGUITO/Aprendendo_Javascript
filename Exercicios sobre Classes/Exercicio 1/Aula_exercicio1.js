const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

let a_carros = []

f_tipoMilitar.addEventListener("click", (evt) => {
    f_nome.value = null
    f_portas.value = null
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", (evt) => {
    f_municao.value = null
    f_blindagem.value = null
    f_blindagem.setAttribute("disabled", "disable")
    f_municao.setAttribute("disabled", "disable")
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${c.nome}  <br>` 
        div.innerHTML += `Portas: ${c.portas}  <br>`
        div.innerHTML += `Cor: ${c.cor}  <br>`
        div.innerHTML += `Blindagem: ${c.blingagem}  <br>`
        div.innerHTML += `Municao: ${c.municao}  <br>`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click", (evt) => {
    if (f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Carro(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})



class Carro { //Classe PAI / BASE
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function () {
        this.ligado = true
    }

    desligar = function () {
        this.desligado = true
    }

    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro { //Classe filho
    constructor(nome, portas, blingagem, municao) {
        super(nome, portas)
        this.blingagem = blingagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Normal", 4)

c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Lutador", 1, 100, 50)

c2.setCor("Azul")

console.log(`Nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log(`-----------------------------`)

console.log(`Nome: ${c2.nome}`)
console.log(`portas: ${c2.portas}`)
console.log(`ligado: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`cor: ${c2.cor}`)
console.log(`blindagem: ${c2.blingagem}`)
console.log(`municao: ${c2.municao}`)
console.log(`municao: ${c2.municao}`)
console.log(`-----------------------------`)