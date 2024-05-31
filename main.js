// script.js

// Seleccionamos los elementos que queremos animar
const header = document.querySelector('header');
const content = document.querySelector('.content');
const images = document.querySelectorAll('.media img');

// Animación al cargar la página
window.addEventListener('load', () => {
    header.style.opacity = 0;
    content.style.opacity = 0;
    images.forEach(img => img.style.opacity = 0);

    setTimeout(() => {
        fadeIn(header);
        fadeIn(content);
        images.forEach(img => fadeIn(img));
    }, 500);
});

// Función para hacer un fade-in gradual
function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('paragraph');
    const text = paragraph.innerHTML; // Usamos innerHTML en lugar de innerText para mantener los espacios
    paragraph.innerHTML = '';
    paragraph.style.opacity = 1;

    let i = 0;
    const speed = 20; // Ajusta la velocidad de la animación aquí

    function typeWriter() {
        if (i < text.length) {
            paragraph.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

