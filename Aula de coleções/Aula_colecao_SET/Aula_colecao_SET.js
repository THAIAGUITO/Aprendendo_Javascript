const caixa = document.querySelector('#caixa')

let musica = new Set(["musica1", "musica boa", "musica10"])

musica.add("Musica muito legal")
musica.add("musica1")
musica.add("musica10")

musica.delete("musica1")
musica.clear()

console.log(musica)

// musica.forEach((el) => {
//     caixa.innerHTML += el + "<br/>"
// })

for(let m of musica){
    caixa.innerHTML += m + "<br/>"
}