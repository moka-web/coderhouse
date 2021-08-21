const boton = document.querySelector(
    ".nav__boton"
)
const lista = document.querySelector(
    ".lista"
)

boton.addEventListener("click", () =>{
    lista.classList.toggle("nav__lista-visible")

})