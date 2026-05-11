class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velMax = 300
        } else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velMax = 100
        } else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velMax = 160
        }else{
            this.tipo = "Militar"
            this.velMax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velMax
    }

    getInfo(){
        return [this.nome,this.tipo,this.velMax]
    }

    setNome(nome){
        this.nome=nome
    }

    setTipo(tipo){
        this.tipo=tipo
    }

    setVelmax(velMax){
        this.velMax=velMax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velMax}`)
        console.log("--------------")
    }
}

let c1 = new Carro ("Rapidão", 1)
let c2 = new Carro ("Super luxo", 2)
let c3 = new Carro ("Bombadão", 4)
let c4 = new Carro ("Carrego tudo", 3)

// c1.info()
// c2.info()

c1.setNome("Super veloz")
c1.setVelmax(500)

c1.info()

// console.log(c1.getInfo()[0])