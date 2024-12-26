document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('header').style.display = 'block'; // Mostramos el header después de la carga
    }, 1500); // Cambia 3000 a la cantidad de milisegundos que desees que dure la carga
});
