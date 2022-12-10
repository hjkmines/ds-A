class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0;
    }

    push(val) {
        // create a new node using the value passed in
        let newNode = newNode(val);

        // edge case to see if a linked list
        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            // otherwise set the next property on the tail to be the new node and
            // property on the list to be the newly created node

            this.tail.next = newNode; 
            this.tail = newNode; 
        }

        this.length++
        return this
    }
    pop() {
        // if there are no nodes in the list, return undefined
        if (!this.head) return; 

        let current = this.head; 
        let newTail = current; 

        // loop through the list until you reach the tail
        while(current.next) {
            // move the new tail to the current position
            newTail = current; 
            current = current.next
        }

        // set the tail to be the 2nd to the last node
        this.tail = newTail

        // set the next property of the new tail to equal null
        this.tail.next = null; 

        this.length--

        if (this.length === 0) {
            this.head = null; 
            this.tail = null; 
        }

        return current;
    }
}