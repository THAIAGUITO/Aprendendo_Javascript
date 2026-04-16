const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
        el.addEventListener("click", (evt) => {
            const el = evt.currentTarget
            el.classList.toggle("destaque")
            console.log(el.innerHTML + " foi clicado")
        })
})