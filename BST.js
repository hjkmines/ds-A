class Node {
    constructor(value) {
        this.value = value; 
        this.left = null; 
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }

    insert(value) {
        // create a new node 
        let newNode = new Node(value);

        // check if a tree is empty, if so, make root equal the new node
        if (!this.root) {
            this.root = newNode; 
            return this; 
        }

        // if there is a root, check if the value of the new node is greater or less than the root
        let current = this.root; 

        while (true) {
            if (value === current.value) return undefined; 

            // if it is less, 
            // check to see if there is a node to the left
            // if there is, move to that node and repeat these steps
            // if there is not, add that node as the left property
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode; 
                    return this; 
                }
                // current = newNode.value
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return this; 
                }
                current = current.right
            }
        }
    }

    find(value) {
        if (!this.root) return false; 

        let current = this.root; 
        let isFound = false; 

        while (current && !isFound) {
            if (value < current.value) {
                current = current.left; 
            } else if (value > current.value) {
                current = current.right; 
            } else {
                isFound = true; 
                return current
            }
        }

        if (!isFound) return false 
    }
}