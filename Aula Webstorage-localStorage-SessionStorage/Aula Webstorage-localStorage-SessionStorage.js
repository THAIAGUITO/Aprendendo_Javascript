const f_texto = document.querySelector('#f_texto');
const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

btn_texto.addEventListener('click', () => {

})

let num = 10
const curso = "javascript"

// window.localStorage.setItem('numero', num
localStorage.setItem('nome', "Tiago")
localStorage.setItem('idade', "30")
localStorage.setItem('curso', curso)
localStorage.setItem('numero', num)
localStorage.setItem('numero', 33)

alert(localStorage.length)

// alert(localStorage.getItem(localStorage.key('curso')))

// alert(localStorage.getItem('numero'))
// alert(localStorage.getItem('curso'))
// alert(localStorage.getItem('nome'))
// alert(localStorage.getItem('idade'))

// // localStorage.clear()