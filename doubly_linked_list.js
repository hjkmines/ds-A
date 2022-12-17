class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)

        if (!this.length) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
            newNode.prev = this.tail; 

            this.tail = newNode; 
        }

        this.length++
        return this; 
    }

    pop() {
        if (!this.head) {
            return undefined
        }

        let poppedNode = this.tail; 

        if (this.length === 1) {
            this.head = null; 
            this.tail = null; 
        } else {
            this.tail = poppedNode.prev; 
            this.tail.next = null; 
            poppedNode.prev = null
        }

        this.length--
        return poppedNode;
    }

    shift() {
        if (!this.length) return; 

        let removedNode = this.head; 

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next; 

            this.head.prev = null; 
            removedNode.next = null 
        }

        this.length--
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val); 

        if (!this.length) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.head.prev = newNode; 
            newNode.next = this.head; 
            this.head = newNode
        }

        this.length++
        return this; 
    }

    get(index) {
        if (index < 0 || index >= this.length) return; 

        let count 
        let current; 

        if (index <= this.length/2) {
            count = 0
            current = this.head 

            while (counter !== index) {
                current = current.next
                counter++
            }
        } else {
            count = this.length - 1; 
            current = this.tail

            while (counter !== index) {
                current = current.prev
                counter--
            }
        }

        return current; 
    }

    set(index, val) {
        
        let foundNode = this.get(index); 

        if (foundNode) {
            foundNode.val = val
        }

        return this;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return; 

        if (index === 0) return this.unshift(val)

        if (index === this.length) return this.push(val)

        const newNode = new Node(val); 

        let prev = this.get(index - 1)
        let after = prev.next

        prev.next = newNode; 
        newNode.prev = prev; 

        newNode.next = after; 
        after.prev = newNode; 

        this.length++; 
        return this; 
    }
}