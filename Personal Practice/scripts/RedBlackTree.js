// Whole-script strict mode syntax
'use strict';

// Style definitions
const blackColor = `#2F4858`;
const redColor   = `#ed2400`;
const lineColor  = `#CCCCCC`;
const fontColor  = `#FFFFFF`;

/**
 * Template for tree nodes
 */
const nodeTemplate =  document.createElement('template');
nodeTemplate.innerHTML = `
<style>

 .node-container[color="red"] > .value > span {
    background: ${redColor};
  }
  
  .node-container[color="black"] > .value > span {
    background: ${blackColor};
  }
  
  .node-container {
    width: 100%;
  }
  
  .node-container .value {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin: 1rem 0;
  }
  
  .node-container .value span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    color: ${fontColor};
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  
  .node-container .children {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: distribute;
        justify-content: space-around;
  }

</style>
<div class="node-container" color="">
    <div class="value">
    </div>
    <div class="children">
    </div>
</div>
`;

/**
 * Class to describe a node of a Red-Black Tree
 */
class TreeNode extends HTMLElement {

    /**
     * Constructor encapsulating all the values of the node.
     * @param {number} value The value for the node
     */
    constructor(value) {
        // Calling HTMLElement constructor
        super();
        
        // This node only accepts numbers
        if (typeof value !== 'number') {
            throw new Error(`"${value}" isn't a number!`);
        }

        // Private variables
        const _value  = value;

        // Adding a template to store the style for this web component
        this.appendChild(nodeTemplate.content.cloneNode(true));
        this.querySelector('.value').innerHTML = `<span>${_value}</span>`;
        
        // New nodes should be red
        this.querySelector('.node-container').setAttribute('color','red');

        // Getters and setters, this way we keep the encapsulation for the node
        Object.defineProperties(this, {
            value: {
                get: () => {
                    return _value;
                },
                configurable: false
            }, 
            color:  {
                set: (newColor) => {
                    this.setColor(newColor);
                },
                get: () => {
                    return this.querySelector('.node-container').getAttribute('color');
                },
                configurable: false
            },
            // The parent is a node HTML element.
            parent: {
                get: () => {
                    // The parent is either null or we are  the children div, 
                    // inside the node div, inside the template.
                    return this.parentElement ? 
                        this.parentElement.parentElement.parentElement : null;
                },
                configurable: false
            },
            left:   {
                set: (obj) => {
                    this.addChild('left', obj);
                },
                get: () => {
                    return this.querySelector('.left');
                },
                configurable: false
            },
            right:  {
                set: (obj) => {
                    this.addChild('right', obj);
                },
                get: () => {
                    return this.querySelector('.right');
                },
                configurable: false
            }
        });

        // Preventing addition fo properties or methods.
        Object.seal(this);
    }

    /**
     * Changes the color of this node to a new one.
     * @param {String} color The new color
     */
    setColor(color) {
        if (typeof color !== 'string') {
            throw new Error(`"${color}" isn't a string!`);
        }

        color = color.toLowerCase();
        if (color != 'red' && color != 'black') {
            throw new Error(`"${color.toUpperCase()}" isn't a valid color!`);
        }

        this.querySelector('.node-container').setAttribute('color', color);
    }

    /**
     * Adds a node as a left or right child of this node.
     * @param {String} side Left or Right
     * @param {Node} obj The new child 
     */
    addChild(side, obj) {
        if (!this.checkIfSameClass(obj)) {
            throw new Error(`"${obj}" isn't a Node!`);
        }
        if( side!=='left' && side!=='right' ) {
            throw new Error(`"${side}" isn't a valid side for the child!`);
        }
        // Case for null
        if (obj === null) {
            // If we already have this child
            let child = this.querySelector(`.${side}`);
            if (child) {
                child.parentElement.removeChild(child);
            }
            return;
        }
        // Removing possible other side
        obj.classList.remove(side==='left' ? 'right' : 'left');
        // Adding the child
        obj.classList.add(side);
        this.querySelector('.children').append(obj);
    }

    /**
     * Changes the color of a node from red to black and the other way around.
     */
    switchColor() {
        this.querySelector('.node-container')
            .setAttribute('color', this.color === 'red'? 'black': 'red');
    }

    /**
     * Method to check if an object is an instance of this class
     * @param {*} obj A javascript reference
     * @returns True if the obj is an instance of this class
     *          False otherwise.
     */
    checkIfSameClass(obj) {
        return typeof obj === 'object' && ( 
                    obj === null ||
                    obj.constructor.name === this.constructor.name);
    }

    /**
     * Compares two nodes with values: x(this) and y(obj).
     * @param {Node} obj The node to compare to. 
     * @returns  0 if x = y
     *          <0 if x > y 
     *          >0 if x < y
     */
     compareTo(obj) {
        if (!this.checkIfSameClass(obj)) {
            throw new Error(`"${obj}" isn't a Node!`);
        }
        else if (obj === null) {
            throw new Error(`"${obj}" can't compare a null node.`);
        }
        else {
            return this.value - obj.value;
        }
    }
}


/**
 * Class for a Red-Black Tree definition. 
 */
class RedBlackTree extends HTMLElement {

    // The root of the tree
    #root;

    constructor() {
        // Calling HTMLElement constructor
        super();

        this.#root = null;

        // Getters and setters, this way we keep the encapsulation for the tree
        Object.defineProperties(this, {
            root: {
                set: (obj) => {
                    console.log(typeof obj);
                    if (obj !== null && (
                        typeof obj !== 'object' || 
                        obj.constructor.name !== 'TreeNode')) {
                            throw new Error(`"${obj}" isn't a Node!`);
                    }
                    obj.color = 'black';
                    obj.classList.add('root');
                    this.#root = obj;
                },
                get: () => {
                    return this.#root;
                },
                configurable: false
            }, 
            length:  {
                value: 0,
                writable: true,
                configurable: false
            }
        });

        // Preventing addition of properties or methods.
        Object.seal(this);
    }

    /**
     * Adds a number to the tree.
     * @param {Number} value The number to add
     */
    insert(value) {
        let newNode = new TreeNode(value);
        this.length++;
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.#insert(this.root, newNode);
            //balanceTree(newNode);
        }
    }

    /*
     * Private recursive function to insert a new node in order.
     */
    #insert(actualNode, newNode) {
        if (newNode.compareTo(actualNode) <= 0) {
            if (actualNode.left === null) {
                actualNode.left = newNode;
            }
            else {
                return this.#insert(actualNode.left, newNode);
            }
        }
        else {
            if (actualNode.right === null) {
                actualNode.right = newNode;
            }
            else{
                return this.#insert(actualNode.right, newNode);
            }
        }
    }

    /**
     * Checks if the argument is a number.
     * @param {*} value The value to check
     */
     validValue(value) {
        if (typeof value !== 'number') {
            throw new Error(`"${value}" isn't a number!`);
        }
    }

    /**
     * Returns true if a value is on the tree. 
     * @param {Number} value The number to search
     * @returns {Boolean} True if the number is in the tree, false otherwise
     */
     search(value) {
        this.validValue(value);
        return (this.#search(this.root, value) !== null);
    }

    /*
     * Private recursive function that search a node in an ordered tree.
     */
    #search(node, value) {
        if (node === null) {
            return null;
        }
        let compare = value - node.value;
        if (compare === 0) {
            return node;
        }
        return (compare < 0) ?  
            this.#search(node.left, value) : this.#search(node.right, value);
    }

    /**
     * Adds a number to the tree.
     * @param {Number} value The number to add
     */
    delete(value) {
        return 'Todo delete';
    }
    
}






window.customElements.define('tree-node', TreeNode);
let test = new TreeNode(1);
console.log(test.constructor.name);
test.color = 'black';
let childLeft = new TreeNode(2);
let childRight = new TreeNode(3);
childRight.switchColor();
test.left = childLeft;
childLeft.parent.right = childRight;
childRight.parent.left = childLeft;

console.log('Parents:');
console.log('Test: '+ test.parent);
console.log('Left: '+ childLeft.parent.value);
console.log('Right: '+ childRight.parent.value);

console.log('Children:');
console.log('Test L: ');
console.log(test.left.value);
console.log('Test R: ');
console.log(test.right.value);

console.log('Switching children');
test.left = childRight;
test.right = childLeft;
console.log('After switching children:');
console.log('Test L: ');
console.log(test.left.value);
console.log('Test R: ');
console.log(test.right.value);
/*
console.log('Removing children');
test.left = null;
test.right = null;

console.log('Removing children again');
test.left = null;
test.right = null;
*/
//document.querySelector('.test').appendChild(test);


window.customElements.define('red-black-tree', RedBlackTree);
let testTree = new RedBlackTree();

testTree.insert(2);
testTree.insert(1);
testTree.insert(3);

console.log(testTree.root);
document.querySelector('.test').appendChild(testTree.root);

console.log(testTree.search(1));
console.log(testTree.search(2));
console.log(testTree.search(3));
console.log(testTree.search(0));

