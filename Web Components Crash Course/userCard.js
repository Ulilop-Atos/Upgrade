// A Basic template fo our web component
// If you want to include th body of the tag in the HTML source, you can use <slot />
// Or customize the slots using an slot attr on a div ie.: <div slot="name-for-the-slot">
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: #9932CC 5px solid;
        }

        .user-card img {
            width: 100%;
        }

        .user-card button {
            cursor: pointer;
            background: #9932CC;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot  name="email" /></p>
                <p><slot  name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>    
    </div>
`;

// Custom class for the element
class UserCard extends HTMLElement {
    
    constructor () {
        // Calling HTMLElement constructor
        super();
        // Setting up properties
        this.showInfo = true;
        // Setup a shadow DOM
        this.attachShadow({mode: 'open'});
        // Adding a template to store the style for this web component
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // The elements of the template will be already in the shadow, we can work on them
        this.shadowRoot.querySelector('h3').innerText = 
            this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = 
            this.getAttribute('avatar');

        // If we don want a template, we can just use the inner HTML of the component, or the shadow dom
        // this.innerHTML = '';
        // this.shadowRoot.innerHTML = '';
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const btn  = this.shadowRoot.querySelector('#toggle-info');
        if(this.showInfo) {
            info.style.display = 'block';
            btn.innerHTML = 'Hide Info';
        } else {
            info.style.display = 'none';
            btn.innerHTML = 'Show Info';
        }
    }

    // This method fires when a component is inserted into the DOM, only once.
    connectedCallback() {
        // Adding an event listener for a button
        this.shadowRoot.querySelector('#toggle-info')
        .addEventListener('click', () => this.toggleInfo());
    }

    // This method fires when a component is removed from the DOM.
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info')
        .removeEventListener();
    }
}

window.customElements.define('user-card', UserCard);