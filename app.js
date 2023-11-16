//ScrollReveal Library
//install to terminal with script: npm install scrollreveal --save 

//Import library scrollreveal
import ScrollReveal from 'scrollreveal';

// Crea un instanza ScrollReveal
let sr = ScrollReveal();

// Configura l'animazione per la classe 'div'
sr.reveal('.div', {
    origin : 'left',
    distance: '100px',
    duration: '1500',
    delay : '200',
    easing: 'ease-in-out',
    reset : 'true'
});

// Crea un array di classi da animare
let className = ['.headline, .tagline, .punchline']

// Configura gli effetti di animazione di default
let optionDefault = {
    origin : 'bottom',
    distance: '100px',
    duration: '1500',
    delay : '200',
    easing: 'ease-in-out',
    reset : 'true'
}

// Applica l'effetto di animazione a ciascuna classe nel tuo array
className.forEach(className => {
    sr.reveal(className, optionDefault);
});