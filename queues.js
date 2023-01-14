// -------- Enqueue Pseudocode --------

// This function accepts some value
// Create a new node using that value passed to the function
// If there are no nodes in the queue, set this node to be the first and last property of the queue
// Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
// Increment the size of the queue by 1

// -------- Dequeue pseudocode ----------

// If there is no first property, just return null
// Store the first property in a variable
// See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
// If there is more than 1 node, set the first property to be the next property of first 
// Decrement the size by 1
// Return the value of the node dequeued

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        // Create a new node using that value passed to the function
        var newNode = new Node(val);
        // If there are no nodes in the queue, 
        // set this node to be the first and last property of the queue
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // Otherwise, set the next property on the current last to be that node, 
            // and then set the last property of the queue to be that node
            this.last.next = newNode;
            this.last = newNode;
        }
        // Increment the size of the queue by 1
        return ++this.size;
    }

    dequeue(){
        // If there is no first property, just return null
        if(!this.first) return null;

        // Store the first property in a variable
        var temp = this.first;
        // See if the first is the same as the last (check if there is only 1 node). 
        // If so, set the first and last to be null
        if(this.first === this.last) {
            this.last = null;
        }
        // If there is more than 1 node, set the first property to be the next property of first 
        this.first = this.first.next;
        // Decrement the size by 1
        this.size--;
        return temp.value;
    }
}