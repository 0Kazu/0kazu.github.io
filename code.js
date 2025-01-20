const boton = document.getElementById("mobButton");
const parrafo = document.getElementById("parrafoM");
parrafo.classList.toggle('active');
//boton.classList.toggle('active');
boton.addEventListener('click', () => {
    parrafo.classList.toggle('active');
});
