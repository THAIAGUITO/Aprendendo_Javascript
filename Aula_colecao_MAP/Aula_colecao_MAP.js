const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "curso de javascript")
mapa.set(1, 100)
mapa.set("canal", 100)

mapa.delete(10)

console.log(mapa)

if (mapa.has("canal")) {
    res = "A chave existe na coleção com o valor" + " " + mapa.get("canal")
} else {
    res = "A chave não existe na coleção"
}

res += "<br/> O tamanho da coleção é" + " " + mapa.size
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})