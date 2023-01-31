// Pushing pseudocode

// Create a new node with the value passed to the function
// If the head property is null set the head and tail to be the newly created node 
// If not, set the next property on the tail to be that node
// Set the previous property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the Doubly Linked List

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // Create a new node with the value passed to the function
        var newNode = new Node(val);
        // If the head property is null set the head and tail to be the newly created node 
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If not, set the next property on the tail to be that node
            this.tail.next = newNode;
            // Set the previous property on the newly created node to be the tail
            // Set the tail to be the newly created node
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        // Increment the length
        this.length++;
        return this;
    }
}
        
// -------- Popping pseudocode -----------

// If there is no head, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node.
// Set the newTail's next to null
// Decrement the length
// Return the value removed

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop(){
        // If there is no head, return undefined
        if(!this.head) return undefined;
        // Store the current tail in a variable to return later
        var poppedNode = this.tail;
        // If the length is 1, set the head and tail to be null because the list is now empty
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // Update the tail to be the previous Node.
            // Set the newTail's next to null
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        // Decrement the length
        this.length--;
        return poppedNode;
    }
}

// -------- Shifting pseudocode -----------

// If length is 0, return undefined
// Store the current head property in a variable (we'll call it old head)
// If the length is one
// set the head to be null
// set the tail to be null
// Update the head to be the next of the old head
// Set the head's prev property to null
// Set the old head's next to null
// Decrement the length
// Return old head

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    shift(){
        // If length is 0, return undefined
        if(this.length === 0) return undefined;
        // Store the current head property in a variable (we'll call it old head)
        var oldHead = this.head;
        // If the length is one
        // set the head to be null
        // set the tail to be null
        // because once you remove it, there is no list
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            // Update the head to be the next of the old head
            this.head = oldHead.next;
            // Set the head's prev property to null
            // Set the old head's next to null
            this.head.prev = null;
            oldHead.next = null;
        }
        // Decrement the length
        this.length--;
        return oldHead;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// --------- Unshifting pseudocode ------------

// Create a new node with the value passed to the function
// If the length is 0
// Set the head to be the new node
// Set the tail to be the new node
// Otherwise
// Set the prev property on the head of the list to be the new node
// Set the next property on the new node to be the head property 
// Update the head to be the new node
// Increment the length
// Return the list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    unshift(val){
        // Create a new node with the value passed to the function
        var newNode = new Node(val);
        // If the length is 0
        // Set the head to be the new node
        // Set the tail to be the new node
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the prev property on the head of the list to be the new node
            // Set the next property on the new node to be the head property 
            // Update the head to be the new node
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        // Increment the length
        this.length++;
        return this;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// ----------- Get Pseudocode --------------

// If the index is less than 0 or greater or equal to the length, return null
// If the index is less than or equal to half the length of the list
// Loop through the list starting from the head and loop towards the middle
// Return the node once it is found
// If the index is greater than half the length of the list
// ​Loop through the list starting from the tail and loop towards the middle
// Return the node once it is found

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index){
        // If the index is less than 0 or greater or equal to the length, return null
        if(index < 0 || index >= this.length) return null;
        let count
        let current;
        // If the index is less than or equal to half the length of the list
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            // Loop through the list starting from the head and loop towards the middle
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            // If the index is greater than half the length of the list
            // ​Loop through the list starting from the tail and loop towards the middle
            // Return the node once it is found 
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        // Return the node once it is found
        return current;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// ----------- Set pseudocode ----------

// Create a variable which is the result of the get method at the index passed to the function
// If the get method returns a valid node, set the value of that node to be the value passed to the function
// Return true
// Otherwise, return false

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    set(index, val){
        // Create a variable which is the result of the get method at the index passed to the function
        var foundNode = this.get(index);
        // If the get method returns a valid node, 
        // set the value of that node to be the value passed to the function
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// -------- Insert pseudocode ---------

// If the index is less than zero or greater than or equal to the length return false
// If the index is 0, unshift
// If the index is the same as the length, push
// Use the get method to access the index -1
// Set the next and prev properties on the correct nodes to link everything together
// Increment the length 
// Return true

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(index, val){
        // If the index is less than zero or greater than or equal to the length return false
        if(index < 0 || index > this.length) return false;
        // If the index is 0, unshift
        if(index === 0) return !!this.unshift(val); //coerce to a boolean 
        // If the index is the same as the length, push
        if(index === this.length) return !!this.push(val); //coerce to a boolean

        var newNode = new Node(val);
        // Use the get method to access the index -1
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        // Set the next and prev properties on the correct nodes to link everything together
        // connect the new node to point <-
        beforeNode.next = newNode; 
        newNode.prev = beforeNode;
        //connect the new node to point to -> 
        newNode.next = afterNode; 
        afterNode.prev = newNode;
        // Increment the length 
        this.length++;
        return true;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// ------- Remove pseudocode -----------

// If the index is less than zero or greater than or equal to the length return undefined
// If the index is 0, shift
// If the index is the same as the length-1, pop
// Use the get method to retrieve the item to be removed
// Update the next and prev properties to remove the found node from the list
// Set next and prev to null on the found node
// Decrement the length
// Return the removed node.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    remove(index, val){
        // If the index is less than zero or greater than or equal to the length return undefined
        if(index < 0 || index > this.length) return false;
        // If the index is 0, shift
        if(index === 0) return !!this.shift(val);
        // If the index is the same as the length-1, pop
        if(index === this.length) return !!this.pop(val);

        // Use the get method to retrieve the item to be removed
        var removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next; 

        beforeNode.next = afterNode; 

        removedNode.prev.next = removedNode.next; 
        removedNode.next.prev = removedNode.prev; 
        removedNode.next = null; 
        removedNode.prev = null; 
        this.length--
        return removedNode; 
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

