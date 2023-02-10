class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value)

        if (!this.length) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length++
        return this; 
    }

    pop() {
        if (!this.length) return; 
        let current = this.head; 
        let newTail = current; 

        while (current.next) {
            newTail = current; 
            current = current.next; 
        }

        this.tail = newTail; 
        this.tail.next = null; 

        this.length--; 

        if (!this.length) {
            this.head = null; 
            this.tail = null; 
        }
        
        return current; 
    }

    shift() {
        if (!this.length) return; 

        let removedHead = this.head; 

        this.head = removedHead.next; 

        this.length--; 

        if (!this.length) {
            this.head = null; 
            this.tail = null; 
        }

        return removedHead;
    }

    unshift(val) {
        let newNode = new Node(val); 

        if (!this.length) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            newNode.next = this.head
            this.head = newNode; 
        }

        this.length++

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return -1; 
        let foundIndex = 0; // our index
        let current = this.head; 

        while (foundIndex !== index) {
            current = current.next
            foundIndex++
        }

        return current; 
    }
}
