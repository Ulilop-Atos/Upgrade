import ScrollMagic from 'scrollmagic';
import bro from './bro';
import './styles/main.scss';

let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    duration: 500, 
    offset:50
    })
    .setPin("body")
    .addTo(controller);
document.querySelector('h1').textContent = bro(`How it's going`);