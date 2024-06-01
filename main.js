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
    const text1 = paragraph.innerHTML;
    paragraph.innerHTML = '';
    paragraph.style.opacity = 1;

    let i = 0;
    const speed = 20;

    function typeWriter1(callback) {
        if (i < text1.length) {
            paragraph.innerHTML += text1.charAt(i);
            i++;
            setTimeout(() => typeWriter1(callback), speed);
        } else {
            callback();
        }
    }

    typeWriter1(() => {
        const paragraphe = document.getElementById('paragraphe');
        paragraphe.innerHTML = ''; // Vaciamos el texto de la segunda animación
        paragraphe.style.opacity = 1; // Ocultamos el elemento de la segunda animación al principio

        const text2 = "Segundo texto de la animación 2"; // Texto de la segunda animación
        
        let j = 0;
        const speed = 20;

        function typeWriter2() {
            if (j < text2.length) {
                paragraphe.innerHTML += text2.charAt(j);
                j++;
                setTimeout(typeWriter2, speed);
            } else {
                paragraphe.style.opacity = 1; // Mostramos el elemento de la segunda animación después de que termine la animación 1
            }
        }

        typeWriter2();
    });
});
