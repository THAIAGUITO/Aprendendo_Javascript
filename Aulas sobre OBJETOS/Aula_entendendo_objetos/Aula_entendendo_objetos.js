class Pessoas{
    constructor(pnome){
        this.nome = pnome; // pnome é o parametro que passamos para o construtor, e nome é a propriedade do objeto
    }
}

let p1 = new Pessoas("Bruno");
let p2 = new Pessoas("Ana");
let p3 = new Pessoas("Carlos");

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);