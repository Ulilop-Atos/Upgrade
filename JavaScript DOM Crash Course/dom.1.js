// Display all the properties and methods of the document
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// We can change items:
// document.title= "123";
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// SELECTORS //

// getElementById
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText); // Listening to style
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black'

// getElementsByClassName
// const itemsHTML = document.getElementsByClassName('list-group-item');
// console.log(itemsHTML);
// // Converting to array (using the spread operator)
// const items = [...itemsHTML];
// items.map( e=> e.style.background = "yellow")


// const itemsTagHTML = document.getElementsByTagName('li');
// console.log(itemsTagHTML);
// // Converting to array (using the spread operator)
// const itemsTag = [...itemsTagHTML];
// itemsTag.map( e=> e.style.color = "Red")



// //Query
// const header =  document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = 'solid 5px #000';
// const input = document.querySelector('input');
// input.value = "Hi!";
// const submit = qs('input[type="submit"]');
// submit.value = 'Send';
// const item = qs('.list-group-item')
// item.style.color = 'red';
// const sndItem = qs('.list-group-item:nth-child(2)')
// sndItem.style.color = 'blue';
// const lastItem = qs('.list-group-item:last-child')
// lastItem.style.color = 'coral';


// Query Selector All
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hi!";

// const oddHTML = qs('li:nth-child(odd)', true);
// const evenHTML = qs('li:nth-child(even)', true);
// const odd = [...oddHTML];
// const even = [...evenHTML];
// odd.map(e => {
//     e.style.backgroundColor = '#f4f4f4';
// });
// even.map(e => {
//     e.style.backgroundColor = '#ccc';
// });
