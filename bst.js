// -------- Finding a Node in a BST ----------
// Steps - Iteratively or Recursively

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        // Create a new node
        var newNode = new Node(value);
        // Starting at the root
        // Check if there is a root, if not - the root now becomes that new node!
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        // If there is a root, check if the value of the new node is greater than or less than the value of the root
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;

            // If it is less
            // Check to see if there is a node to the left
            // If there is, move to that node and repeat these steps
            // If there is not, add that node as the left property
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                // If it is greater 
                // Check to see if there is a node to the right
                // If there is, move to that node and repeat these steps
                // If there is not, add that node as the right property
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        // Starting at the root
        // Check if there is a root, if not - we're done searching!
        if(this.root === null) return false;
        // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
        var current = this.root,
            found = false;

        //while there is something to loop through and we have not found it
        while(current && !found){
            if(value < current.value){
                 // If it is less
                // Check to see if there is a node to the left
                // If there is, move to that node and repeat these steps
                current = current.left;
            } else if(value > current.value){
                 // If not, check to see if the value is greater than or less than the value of the root
                // If it is greater 
                // Check to see if there is a node to the right
                // If there is, move to that node and repeat these steps
                // If there is not, we're done searching!
                current = current.right;
            } else {
                found = true;
            }
        }
        // If there is not, we're done searching!
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)