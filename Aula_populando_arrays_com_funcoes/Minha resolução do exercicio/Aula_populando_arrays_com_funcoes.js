// Minha resolução para o exercicio de populando arrays com funções. O código é um pouco repetitivo, mas é funcional.

valor1 = document.querySelector("#valor1")
valor2 = document.querySelector("#valor2")
btnDividir = document.querySelector("#btnDividir")
btnMultiplicar = document.querySelector("#btnMultiplicar")
btnSomar = document.querySelector("#btnSomar")
btnSubtrair = document.querySelector("#btnSubtrair")
resultado = document.querySelector("#resultado")

const op = [
    () => Number(valor1.value) / Number(valor2.value),
    () => Number(valor1.value) * Number(valor2.value),
    () => Number(valor1.value) + Number(valor2.value),
    () => Number(valor1.value) - Number(valor2.value),
]


btnDividir.addEventListener("click", (evt) => {
    resultado.innerHTML = op[0]()
})

btnMultiplicar.addEventListener("click", (evt) => {
    resultado.innerHTML = op[1]()
})

btnSomar.addEventListener("click", (evt) => {
    resultado.innerHTML = op[2]()
})

btnSubtrair.addEventListener("click", (evt) => {
    resultado.innerHTML = op[3]()
})