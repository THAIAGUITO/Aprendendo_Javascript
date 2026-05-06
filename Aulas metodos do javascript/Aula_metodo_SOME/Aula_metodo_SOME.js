const p_array = document.querySelector("#array");
const btnPesquisar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 19]
p_array.innerHTML = "[" + elementos_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
    const retorno = elementos_array.some((ele, ind) => {
        if(ele < 18){
            resultado.innerHTML = "Array não conforme na posição " + ind
        }
        return ele >= 18
    })
    if (retorno) {
        resultado.innerHTML = "OK"
    }
})