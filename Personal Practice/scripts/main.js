const open  = document.getElementById('open-menu');
const close = document.getElementById('close-menu');
const nav = document.querySelector('nav');
open.addEventListener('click', () => {
    nav.classList.add('menu-show');
})

close.addEventListener('click', () => {
    nav.classList.remove('menu-show');
})
