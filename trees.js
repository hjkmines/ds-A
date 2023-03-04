class Node {
    constructor(value) {
        this.value = value
        this.left = null; 
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode; 
            return this; 
        }

        let current = this.root
        while (true) {
            if (value === current.value) return;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode; 
                    return this; 
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode; 
                    return this; 
                }
                current = current.right
            }
        }
    }

    find(value) {
        if (!this.root) return;

        let current = this.root; 
        let found = false; 

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true; 
            }
        }

        return current; 
    }

    contains(value) {
        if (!this.root) return;

        let current = this.root; 
        let found = false; 

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true; 
            }
        }

        return false; 
    }

    BFS() {
        let node = this.root; 
        let visited = []; 
        let queue = [node]; 

        while (queue.length) {
            node = queue.shift(); 
            visited.push(node.value); 

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        return visited;
    }

    DFSPreOrder() {
        let visited = []; 
        
        function traverse(node) {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited;
    }
 }

let tree = new BinarySearchTree(); 

tree.insert(10); 
tree.insert(5); 
tree.insert(13); 
tree.insert(11); 
tree.insert(2); 
tree.insert(16); 
tree.insert(7);

console.log(tree)