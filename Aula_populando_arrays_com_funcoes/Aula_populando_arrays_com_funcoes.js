valor1 = document.querySelector("#valor1")
valor2 = document.querySelector("#valor2")
btnDividir = document.querySelector("#btnDividir")
btnMultiplicar = document.querySelector("#btnMultiplicar")
btnSomar = document.querySelector("#btnSomar")
btnSubtrair = document.querySelector("#btnSubtrair")
resultado = document.querySelector("#resultado")

let valores = []

const op = [
    (val) => {
        if (valores[0] != 0 && valores[1] != 0) {
            valores.pop()
            valores.pop()
        } else {
            valores.push(valor1.value)
            valores.push(valor2.value)
            console.log(valores)
        }
        valor1 = valores[0]
        valor2 = valores[1]

        resultado = (valor1 / valor2)
        return resultado
    },

    (val) => {
        let res = 1
        for (v of val) {
            res *= v
        }
        return res
    },

    (val) => {
        for (v of val) {
            console.log(v)
        }
    }
]

btnDividir.addEventListener("click", (evt) => {
    resultado_soma = (op[0](valores))
    console.log(resultado_soma)
    resultado.innerHTML = resultado_soma.value
})

btnMultiplicar.addEventListener("click", (evt) => {
    valores.push(valor1.value)
    valores.push(valor2.value)
    resultado_soma = (op[1](valores))
    resultado.innerHTML = resultado_soma
})

btnSomar.addEventListener("click", (evt) => {
    valores.push(valor1.value)
    valores.push(valor2.value)
    resultado_soma = (op[0](valores))
    resultado.innerHTML = resultado_soma
})

// console.log(op[1](valores))