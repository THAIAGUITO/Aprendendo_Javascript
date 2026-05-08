const btn_soma = document.getElementById('btn_somar');
const btn_subtracao = document.getElementById('btn_subtrair');
const btn_multiplicacao = document.getElementById('btn_multiplicar');
const btn_divisao = document.getElementById('btn_dividir');
const resultado = document.getElementById('resultado');

const op = [
    () => {
        const val=[document.getElementById('valor1').value, document.getElementById('valor2').value];
        resultado.value = Number(val[0]) + Number(val[1]);
    },
    () => {
        const val=[document.getElementById('valor1').value, document.getElementById('valor2').value];
        resultado.value = Number(val[0]) - Number(val[1]);
    },
    () => {
        const val=[document.getElementById('valor1').value, document.getElementById('valor2').value];
        resultado.value = Number(val[0]) * Number(val[1]);
    },
    () => {
        const val=[document.getElementById('valor1').value, document.getElementById('valor2').value];
        resultado.value = Number(val[0]) / Number(val[1]);
    }
]

btn_soma.addEventListener('click', op[0]);
btn_subtracao.addEventListener('click', op[1]);
btn_multiplicacao.addEventListener('click', op[2]);
btn_divisao.addEventListener('click', op[3]);