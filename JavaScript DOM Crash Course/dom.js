const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete item event
itemList.addEventListener('click', removeItem);
// Filter listener
filter.addEventListener('keyup', filterItemList);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newVal = document.getElementById('item');
    
    // Create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newVal.value));
    
    // Append delete button
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn btn-danger btn-sm float-right delete';
    btnDelete.textContent = 'X';
    li.appendChild(btnDelete)

    // Appending li to list in DOM
    itemList.appendChild(li);
}

// Delete item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
       if(confirm("Are you sure?")) {
           const li = e.target.parentElement;
           itemList.removeChild(li);
       }

    }
}

// Filter items
function filterItemList(e) {
    // Transform to lowercase
    const text = e.target.value.toLowerCase();

    // Get all li
    const items = itemList.getElementsByTagName('li');
 
    // Filtering the list
    [...items].forEach(element => {
        const itemName = element.firstChild.textContent.toLowerCase();
        if (itemName.includes(text)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}