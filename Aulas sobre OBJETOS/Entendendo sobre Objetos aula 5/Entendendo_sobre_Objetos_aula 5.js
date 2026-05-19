const Pessoa = {
    
    nome: "",
    idade: null,

    getNome: function(){
        return this.nome
    },

    getIdade: function(){
        return this.idade
    },
    
    setNome: function(nome){
        this.nome = nome
    },

    setIdade: function(idade){
        this.idade = idade
    },
}

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")


btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")

    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)

    const div = document.createElement("div")
    div.setAttribute("class","pessoa")
    div.innerHTML = `Seu nome é: ${Pessoa.getNome()} <br> Sua idade é: ${Pessoa.getIdade()}`
    res.appendChild(div)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(Pessoa.getNome(), Pessoa.getIdade())
})

// const p2 = Pessoa
// const p3 = Pessoa
// const p4 = Pessoa

// p3.nome = "Tiago"
// p2["nome"] = "caique"

// Pessoa.setNome("matheus")

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)