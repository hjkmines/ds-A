class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.length) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }

        this.length++
        return this;
    }

    pop() {
        if (!this.length) return 

        let poppedNode = this.tail; 

        if (this.length === 1) {
            this.head = null; 
            this.tail = null;
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null; 
            poppedNode.prev = null;
        }

        this.length--
        return poppedNode;
    }
}