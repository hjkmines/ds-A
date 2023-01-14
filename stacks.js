// ---------- PUSHING PSEUDOCODE ----------

// The function should accept a value
// Create a new node with that value
// If there are no nodes in the stack, set the first and last property to be the newly created node 
// If there is at least one node, create a variable that stores the current first property on the stack
// Reset the first property to be the newly created node
// Set the next property on the node to be the previously created variable
// Increment the size of the stack by 1


// --------- POP PSEUDOCODE ---------------

// If there are no nodes in the stack, return null
// Create a temporary variable to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the node removed

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // can't just use push and pop from singly linked list methods because 
    // stacks must have O(1) time so must use singly linked list unshift and shift
    push(val){
        // Create a new node with that value
        var newNode = new Node(val);
        // If there are no nodes in the stack, 
        // set the first and last property to be the newly created node 
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // If there is at least one node, 
            // create a variable that stores the current first property on the stack
            var temp = this.first;
            // Reset the first property to be the newly created node
            this.first = newNode;
            // Set the next property on the node to be the previously created variable
            this.first.next = temp;
        }
        // Increment the size of the stack by 1
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}