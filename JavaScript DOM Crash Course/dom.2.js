// Traversing the DOM //
const itemList = qs('#items');
// // Parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#ccc';

// // ParentElement (almost the same)
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = '#ccc';

// // ChildNodes (includes new lines in source HTML, so is better to not use this)
// console.log(itemList.childNodes);
// // Proper way:
// console.log(itemList.children);
// itemList.children[1].style.color = "yellow";
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello last';

// // Next Sibling
// console.log(itemList.nextSibling); //This one again consult the source html code, bad idea
// console.log(itemList.nextElementSibling);
// // previous Sibling
// console.log(itemList.previousSibling); //This consults the source html code, bad idea
// console.log(itemList.previousElementSibling);

//create a div
const newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'helloId';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
const newDivText = document.createTextNode('Hello World!');

// Add text to div
newDiv.appendChild(newDivText);

console.log(newDiv); // <div class="hello" id="helloId" title="Hello Div">Hello World!</div>

// Inserting in the DOM
const container = qs('header .container');
const h1 = qs('header h1');
console.log(container);
container.insertBefore(newDiv, h1);
container.appendChild(newDiv);
// More in https://developer.mozilla.org/en-US/docs/Web/API/Node
