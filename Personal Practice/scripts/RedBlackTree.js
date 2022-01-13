// Whole-script strict mode syntax
'use strict';

/**
 * Class to describe a node
 */
class Node {

    /**
     * Constructor encapsulating all the values of the node.
     * @param {number} value The value for the node
     */
    constructor(value) {

        if (typeof value !== 'number') {
            throw new Error(`"${value}" isn't a number!`);
        }
        let _value  = value;
        let _parent = null;
        let _right  = null;
        let _left   = null;
        let _color  = '';

        // Getters and setters, this way we keep the encapsulation for the node
        Object.defineProperties(this, {
            value: {
                get: () => {
                    return _value;
                }
            }, 
            parent: {
                set: (obj) => {
                    if (!this.checkIfSameClass(obj)) {
                        throw new Error(`"${obj}" isn't a Node!`);
                    }
                    _parent = obj;
                },
                get: () => {
                    return _parent;
                }
            },
            left:   {
                set: (obj) => {
                    if (!this.checkIfSameClass(obj)) {
                        throw new Error(`"${obj}" isn't a Node!`);
                    }
                    _left = obj;
                },
                get: () => {
                    return _left;
                }
            },
            right:  {
                set: (obj) => {
                    if (!this.checkIfSameClass(obj)) {
                        throw new Error(`"${obj}" isn't a Node!`);
                    }
                    _right = obj;
                },
                get: () => {
                    return _right;
                }
            },
            color:  {
                set: (newColor) => {
                    if (typeof newColor !== 'string') {
                        throw new Error(`"${newColor}" isn't a string!`);
                    }
                    newColor = newColor.toUpperCase();
                    if (newColor != 'RED' && newColor != 'BLACK') {
                        throw new Error(`"${newColor}" isn't a valid color!`);
                    }
                    _color = newColor.toLowerCase();
                },
                get: () => {
                    return _color;
                }
            },
        });

        // Preventing addition fo properties or methods.
        Object.seal(this);
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
    compare(obj) {
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

    toString() {
        return `
        <div class="node ${_color}">
            <div class="value">
                <span>${_value}</span>
            </div>
            <div class="children">
                ${_left  !==null ? _left.toString()  : ''}
                ${_right !==null ? _right.toString() : ''}
            </div>
        </div>
        `;
    }

}
