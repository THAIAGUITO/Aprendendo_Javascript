class Carro{ //Classe PAI / BASE
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.desligado = true
    }

    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filho
    constructor(nome, portas, blingagem, municao){
        super(nome, portas)
        this.blingagem = blingagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

const c1 = new Carro("Normal",4)

c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Lutador",1,100,50)

c2.setCor("Azul")

console.log(`Nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log(`-----------------------------`)

console.log(`Nome: ${c2.nome}`)
console.log(`portas: ${c2.portas}`)
console.log(`ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`cor: ${c2.cor}`)
console.log(`blindagem: ${c2.blingagem}`)
console.log(`municao: ${c2.municao}`)
console.log(`municao: ${c2.municao}`)
console.log(`-----------------------------`)

const atirar = document.querySelector(".atirar")

atirar.addEventListener("click", (evt) => {
    c2.atirar()
    console.log(`Munição: ${c2.municao}`)
})