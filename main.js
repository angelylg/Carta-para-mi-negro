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
    const paragraphs = [
        document.getElementById('paragraph1'),
        document.getElementById('paragraph2'),
        document.getElementById('paragraph3'),
        document.getElementById('paragraph4'),
        document.getElementById('paragraph5'),
        document.getElementById('paragraph6')
    ];

    const texts = paragraphs.map(p => p.innerHTML);
    paragraphs.forEach(p => p.innerHTML = '');
    let i = 0;
    const speed = 20; // Ajusta la velocidad de la animación aquí

    function typeWriter(paragraphIndex) {
        if (paragraphIndex < paragraphs.length) {
            let j = 0;
            const currentParagraph = paragraphs[paragraphIndex];
            const currentText = texts[paragraphIndex];
            currentParagraph.style.opacity = 1;

            function writeCharacter() {
                if (j < currentText.length) {
                    currentParagraph.innerHTML += currentText.charAt(j);
                    j++;
                    setTimeout(writeCharacter, speed);
                } else {
                    currentParagraph.style.opacity = 1; // Mostrar el párrafo después de que la animación haya terminado
                    typeWriter(paragraphIndex + 1); // Pasar al siguiente párrafo
                }
            }

            writeCharacter();
        }
    }

    typeWriter(0); // Iniciar la animación con el primer párrafo
});
