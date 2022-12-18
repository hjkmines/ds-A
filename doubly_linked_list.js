class Node {
    constructor(val) {
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

    push(val) {
        // create new node 
        let newNode = new Node(val); 

        if (!this.head) {
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
        if (!this.head) return undefined; 

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

    shift(){
        if (!this.length) return undefined; 

        let removedNode = this.head; 
        if (this.length === 1) {
            this.head = null; 
            this.tail = null; 
        } else {
            this.head = removedNode.next; 

            removedNode.next = null; 
            this.head.prev = null; 
        }

        this.length--; 
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
            this.head = newNode; 
        }
        this.length++
        return this; 
    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) return; 

        let count; 
        let current; 

        if (index <= this.length/2) {
            count = 0; 
            current = this.head; 

            while (count !== index) {
                current = current.next; 
                count++; 
            }
        } else {
            count = this.length - 1; 
            current = this.tail; 
            while (count !== index) {
                current = current.prev
                count--; 
            }
        }

        return current; 
    }

    set(index, val) {
        let foundNode = this.get(index); 

        if (foundNode) foundNode.val = val; 

        return this; 
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return; 

        if (index === 0) return this.shift(val); 

        if (index === this.length - 1) return this.push(val); 

        let newNode = new Node(val); 

        let prev = this.get(index - 1); 
        let after = prev.next; 

        //connect the prev to the newNode
        prev.next = newNode; 
        newNode.prev = prev; 

        //connect the after to the newNode 
        newNode.next = after; 
        after.prev = newNode; 

        this.length++; 
        return this; 
    }

    remove(index) {
        if (!this.head || index < 0 || index > this.length) return; 

        if (index === 0) return this.shift(); 

        if (index === this.length - 1) return this.pop(); 

        let removedNode = this.get(index); 
        let prev = removedNode.prev; 
        let after = removedNode.next; 

        prev.next = after; 
        after.prev = prev; 

        removedNode.prev = null; 
        removedNode.next = null; 

        this.length--; 
        return this; 
    }
}