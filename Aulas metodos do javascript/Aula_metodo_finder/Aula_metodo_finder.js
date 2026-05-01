const p_array = document.getElementById("array");
const txt_pesquisa = document.getElementById("pesquisa");
const btnPesquisar = document.getElementById("btnPesquisar");
const resultado = document.getElementById("resultado");

const elementos_array = [10, 5, 8, 2, 9, 15, 20]

p_array.innerHTML = "[" + elementos_array + "]"

// const pesquisar = (ele, ind) => { pode ser usado dessa forma ou
// }
// function pesq(ele, ind){          da forma tradicional com function

// }

btnPesquisar.addEventListener("click", (evt) => {
    const retorno = elementos_array.find((ele, ind) => {
        if(ele == txt_pesquisa.value){
            resultado.innerHTML = "Valor pesquisado: " + ele + " Na posição: " + ind
            return ele
        }
    })
    console.log(retorno)
})