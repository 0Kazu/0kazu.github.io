const boton = document.getElementById("mobButton");
const boton1 = document.getElementById("mobButton1");

const parrafo = document.getElementById("parrafoM");
const parrafo1 = document.getElementById("parrafoM1");

parrafo.classList.toggle('active');
parrafo1.classList.toggle('active');

//boton.classList.toggle('active');
boton.addEventListener('click', () => {
    parrafo.classList.toggle('active');
});

boton1.addEventListener('click', () => {
    parrafo1.classList.toggle('active');
});
