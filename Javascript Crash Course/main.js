// I didn't downloaded the original file, this is a manual reproduction for learning proposes. 

// The most higher element in the DOM is window.
// console.log(window);
// Selecting by Id
// const form = document.getElementById('my-form');
// Query (jquery alike selector)
// console.log(document.querySelector('#my-form'));

// Selecting all elements of class item, this returns a nodeList https://developer.mozilla.org/en-US/docs/Web/API/NodeList
// const items = document.querySelectorAll('.item');
// Alternatives:
// document.getElementsByClassName() or
// document.getElementsByTagName()  

// Manipulating the doc
// const ul = document.querySelector('.items');
// Removing the list from the DOM
// ul.remove();

// Editing the first child 
// ul.firstElementChild.textContent = 'Hello';
// Grabbing by index
// ul.children[1].innerText= 'Index';
// Last child element
// ul.lastElementChild.innerHTML = '<h1>Hi!</h1>';

// Editing some style of an element:
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Adding an event on click of the submit button
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hi!</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameIn = document.querySelector('#name');
const mailIn = document.querySelector('#email');
const msgOut = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if(nameIn.value === '' || mailIn === '') {
        msgOut.classList.add('error');
        msgOut.innerHTML = 'Please enter all fields';
        setTimeout( () => msgOut.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameIn.value}: ${mailIn.value}`
        ))
        userList.appendChild(li);

        // Clearing form
        nameIn.value = '';
        mailIn.value = '';
    }

} 