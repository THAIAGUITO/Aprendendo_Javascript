const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

const colecaoHTML = document.getElementsByTagName("div") //Coleção trazendo HTML Collection
const colecaoHTML_array = [...document.getElementsByTagName("div")] //Coleção trazendo Array

console.log(arrayElementos)
console.log(colecaoHTML_array) // Tratando Array
console.log(colecaoHTML) // Tratando HTML Collection

colecaoHTML_array.map((e) => { //coleçãoHTML_array funciona o map pois foi transformada em array
    console.log(e)
})