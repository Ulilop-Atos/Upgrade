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
    margin: .5rem;
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
        <div id="l-id"></div>
        <div id="r-id"></div>
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
    constructor(value, id = Date.now()) {
        // Calling HTMLElement constructor
        super();
        
        // This node only accepts numbers
        if (typeof value !== 'number') {
            throw new Error(`"${value}" isn't a number!`);
        }

        // Private variables
        let _value  = value;
        const _id = id;

        // Adding a template to store the style for this web component
        this.setAttribute('id',`node-${value}-${_id}`);
        this.appendChild(nodeTemplate.content.cloneNode(true));
        this.querySelector('.value').innerHTML = `<span>${_value}</span>`;
        this.querySelector('#l-id').setAttribute('id',`l-${_id}`)
        this.querySelector('#r-id').setAttribute('id',`r-${_id}`)
        // New nodes should be red
        this.querySelector('.node-container').setAttribute('color','red');
        
        // Getters and setters, this way we keep the encapsulation for the node
        Object.defineProperties(this, {
            id: {
                get: () => {
                    return _id;
                },
                configurable: false
            }, 
            value: {
                get: () => {
                    return _value;
                },
                set: (newValue) => {
                    if (typeof newValue !== 'number') {
                        throw new Error(`"${newValue}" isn't a number!`);
                    }
                    _value = newValue;
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
                        this.parentElement.parentElement.parentElement.parentElement : null;
                },
                configurable: false
            },
            left:   {
                set: (obj) => {
                    this.addChild('left', obj);
                },
                get: () => {
                    return this.querySelector(`#l-${_id}`).firstElementChild; 
                },
                configurable: false
            },
            right:  {
                set: (obj) => {
                    this.addChild('right', obj);
                },
                get: () => {
                    return this.querySelector(`#r-${_id}`).firstElementChild;
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
     * @param {TreeNode} obj The new child 
     */
    addChild(side, obj) {
        if (!this.checkIfSameClass(obj)) {
            throw new Error(`"${obj}" isn't a Node!`);
        }
        if( side!=='left' && side!=='right' ) {
            throw new Error(`"${side}" isn't a valid side for the child!`);
        }
        // Removing possible other side class and selecting child of this side
        let child = null;
        if (side === 'left') {
            child = this.left;
        }
        else {
            child = this.right;
        }
        // Removing child from side
        if (child) {
            console.log(`Removing ${child.value} from ${this.value} ${side} side` );
            child.parentElement.removeChild(child);
        }
        // Case for null
        if (obj === null) {
            return;
        }
        // Adding the child
        console.log(`Adding ${obj.value} to ${this.value} ${side} side` );
        if (side === 'left') {
            this.querySelector(`#l-${this.id}`).append(obj);
        }
        else {
            this.querySelector(`#r-${this.id}`).append(obj);
        }
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
     * @param {TreeNode} obj The node to compare to. 
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
                    if (obj !== null && (
                        typeof obj !== 'object' || 
                        obj.constructor.name !== 'TreeNode')) {
                            throw new Error(`"${obj}" isn't a Node!`);
                    }
                    obj.color = 'black';
                    obj.classList.add('root');
                    if (this.#root !== null) {
                        this.#root.classList.remove('root');
                    }
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
        console.log('inserting: '+ value );
        let newNode = new TreeNode(value, `${this.length}-${Date.now()}`);
        this.length++;
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.#insert(this.root, newNode);
        }
        this.#balanceTree(newNode);
        return newNode;
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

    #balanceTree(node) {
        let parent = node.parent;

        // Case for the root
        if (parent === null) {
            node.color = 'black';
            console.log('case root');
            return;
        }

        // If the parent is black, we finished.
        if (!this.#isRed(parent)) 
            return;

        let ancestor = parent.parent;
        let relative = this.#getRelative(parent);

        // Case 1, is the relative of our parent is red, push blackness down 
        // from ancestor
        if (this.#isRed(relative)) {
            parent.color = 'black';
            relative.color = 'black';
            ancestor.color = 'red';
            this.#balanceTree(ancestor);
            return;
        }

        // Case 2, our ancestor tree is balanced
        // If we are opposite side children to our parent need to rotate
        // the tree from the parent node. 
        if (this.#isLeft(parent) && !this.#isLeft(node)) {
            this.#turnLeft(parent);
            parent = node;
            ancestor = parent.parent;
            node = parent.left;
        }
        else if (!this.#isLeft(parent) && this.#isLeft(node)) {
            this.#turnRight(parent);
            parent = node;
            ancestor = parent.parent;
            node = parent.right;
        }

        parent.color   = 'black';  
        ancestor.color = 'red';
        
        if (this.#isLeft(node)) 
            this.#turnRight(ancestor);
        else 
            this.#turnLeft(ancestor);
    }


    /**
     * If the left child of a node isn't empty, turn this tree:
     *       (x)
     *      /   \
     *    (y)    (c)
     *   /   \
     * (a)    (b)
     * 
     * Into:
     *    (y)
     *   /   \
     * (a)    (x)
     *       /   \
     *     (b)    (c)
     * @param {TreeNode} node The node x 
     */
    #turnRight(node) {
        console.log('turnRight', node);
        if (node !== null && node.left !== null) {
            let atLeft = node.left;
            if (node.parent !== null) {
                if (this.#isLeft(node))
                    node.parent.left = atLeft;
                else
                    node.parent.right = atLeft;
            }
            else 
                this.root = atLeft;
                            
            if (atLeft.right !== null)
                node.left = atLeft.right;
            else 
                node.left = null;
                
            atLeft.right = node;
        } 
    }

    /**
     * If the right child of a node isn't empty, turn this tree:
     *    (x)
     *   /   \
     * (a)    (y)
     *       /   \
     *     (b)    (c)
     * 
     * Into:
     *       (y)
     *      /   \
     *    (x)    (c)
     *   /   \
     * (a)    (b)
     * @param {TreeNode} node The node x 
     */
    #turnLeft(node) { 
        console.log('turnLeft', node.value);
        if (node !== null && node.right !== null) {
            let atRight = node.right;
            if (node.parent !== null) {
                if (this.#isLeft(node))
                    node.parent.left = atRight;
                else
                    node.parent.right = atRight;
            }
            else 
                this.root = atRight;

            if (atRight.left !== null)
                node.right = atRight.left;
            else 
                node.right = null;
            
            if (node.left) {
                
                console.log(`Left from ${node.value} is ${node.left.value}`);
            }
            if (atRight.left) {
                
                console.log(`Children at right: `, atRight.children);
            }

            atRight.left = node;
        }
    }

    /*
     * Returns true if the color of the node is red.
     */
    #isRed(node) {
        return node !== null && node.color === 'red';
    }

    /*
     * A node is left when his parent left side node is that node. 
     */
    #isLeft(node) {
        return node !== null && node.parent !== null && node.parent.left === node;
    }

    /*
     * A relative of a node is a node with the same parent.
     */
    #getRelative(node) {
        if (node === null || node.parent === null) {
            return null; 
        }
        return this.#isLeft(node)? node.parent.right: node.parent.left; 
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
     * Removes a number in the tree. If the number is not in the tree, throws an
     * error.
     * @param {Number} value The number to delete
     */
    delete(value) {
        this.validValue(value);
        let node = this.#search(this.root, value);
        if (node === null) {
            throw new Error(`The number "${value}" isn't in the tree!`);
        }

        this.length--;

        // Del is the max left children of the tree
        let del = this.#exchangeMaxNode(node);

        // Root case
        if (del === this.root) {
            this.root = null;
            return;
        }

        // If the max node has a left
        if (del.left && this.#isRed(del.left)) { 
            del.left.color = 'black';
        }
        
        if (!this.#isRed(value))
            this.#reBalance(del);

        if (this.#isLeft(del))
            del.parent.left = (del.left)? del.left: null;
        else
            del.parent.right = (del.left)? del.left: null;

    
        
    }

    #reBalance(node) {}

    /**
     * Returns the biggest value in the tree.
     * @returns {Number} The max in the tree
     */
    max() {
        return this.root === null ? 0 : this.#max(this.root).value;
    }
    // Auxiliary function that works on nodes.
    #max(node) {
        if (node === null)
            return null;

        return node.right === null ? node : this.#max(node.right);
    }

    // Exchanges a tree node value with the max value in their sub tree 
    #exchangeMaxNode(node) {
        if (node === null)
            return null;

        if (!node.left)
            return node;
        
        let max = this.#max(node.left);
        node.value = max.value;
        return max;
    }
    
}

/*
window.customElements.define('tree-node', TreeNode);
let test = new TreeNode(1);
test.color = 'black';
console.log(test);
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
/*
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
console.log('Removing children');
test.left = null;
test.right = null;

console.log('Removing children again');
test.left = null;
test.right = null;

//document.querySelector('.test').appendChild(test);

*/
window.customElements.define('tree-node', TreeNode);
let test = new TreeNode(1);
test.value = 100;
console.log(test.value);
window.customElements.define('red-black-tree', RedBlackTree);
let testTree = new RedBlackTree();
testTree.insert(1);
testTree.insert(2);
testTree.insert(3);
testTree.insert(4);
testTree.insert(5);
testTree.insert(6);
testTree.insert(7);
testTree.insert(8);
testTree.insert(9);
testTree.insert(10);
testTree.insert(11);
testTree.insert(12);
console.log(testTree.length);
document.querySelector('.test').appendChild(testTree.root);
//testTree.insert(8);
// console.log(n4.value, n4.left.value);
/*
console.log(testTree.root);

console.log(testTree.search(1));
console.log(testTree.search(2));
console.log(testTree.search(3));
console.log(testTree.search(0));
*/