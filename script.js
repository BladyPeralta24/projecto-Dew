let contador = 0;
const productos = document.querySelectorAll('.producto');
const carrusel = document.getElementById('carrusel');

setInterval(() => {
    carrusel.scrollLeft = productos[contador].offsetLeft;
    contador = (contador + 1) % productos.length;
}, 2000);
