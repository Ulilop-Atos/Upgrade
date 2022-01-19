// Grabbing the button
// const btn = qs('#button');

// // Adding an event
// btn.addEventListener('click', () => console.log('Button click'));

// Adding event for function that receive an event param
// btn.addEventListener('click', buttonClick);

// function buttonClick(event) {
//     // console.log(event);
//     console.log(event.target);
//     console.log(event.target.id);
//     console.log(event.target.className);
//     console.log(event.target.classList);
//     const output = document.getElementById('output');
//     output.innerHTML = '<h3>' + event.target.id +'</h3>';

//     console.log(event.type);
//     // Position on the window (the browser)
//     console.log(event.clientX);
//     console.log(event.clientY);
//     // Position on the element
//     console.log(event.offsetX);
//     console.log(event.offsetY);
    
//     // Says if a click is down while the event happened
//     console.log(event.altKey);
//     console.log(event.ctrlKey);
//     console.log(event.shiftKey);
// }


// const btn = document.getElementById('button');
// const box = document.getElementById('box');
// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);
// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);

// // Triggers only once per event
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// // Triggers also for every child in the node
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove',runEvent);

// function runEvent(e) {
//     console.log('Event type: ' + e.type);
//     const output = document.getElementById('output');
//     output.innerHTML = '<h3>MouseX: ' + e.offsetX+ '<br> MouseY: ' + e.offsetY + '</h3>';
//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

const inputItem = qs('input[type="text"]');
const form = qs('form');
const select = qs('#itemSelect');

// inputItem.addEventListener('keydown',runEvent);
// inputItem.addEventListener('keyup',runEvent);
// inputItem.addEventListener('keypress',runEvent);
// inputItem.addEventListener('focus',runEvent);
// inputItem.addEventListener('blur',runEvent);

// inputItem.addEventListener('cut',runEvent);
// inputItem.addEventListener('paste',runEvent);
// inputItem.addEventListener('input',runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('Event type: ' + e.type);
    
    //document.body.style.display = 'none';
    // console.log(e.target.value);
    // qs('#output').innerHTML = `<h3>${e.target.value}</h3>`
}