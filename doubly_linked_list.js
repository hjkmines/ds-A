class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(val) {
        // create a new node with the value passed to the function
        let newNode = new Node(val); 

        // if the head property exists, if not, set the new node to be both head and tail!
        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            // if not, set the next property on the tail to be that node
            this.tail.next = newNode; 

            // set the prev node on the newly created node to be the tail
            newNode.prev = this.tail; 

            // set the newNode as the new tail
            this.tail = newNode; 
        }

        this.length++
        return this; 
    }

    pop() {
        // if there is no head, return undefined
        if (!this.head) return undefined; 

        // store the current tail to remove in a variable to return later
        let poppedNode = this.tail; 

        // if there is only one node, set the head/tail to null
        if (this.length === 1) {
            this.head = null; 
            this.tail = null; 
        } else {
            // reassign our tail to be the prev
            this.tail = poppedNode.prev; 
            // remove the right arrow 
            this.tail.next = null; 
            // remove the left arrow
            poppedNode.prev = null; 
        }

        this.length--
        return poppedNode; 
    }

    shift() {
        // check if there no head 
        if (!this.head) return undefined; 

        let oldHead = this.head; 

        if (this.length === 1) {
            this.head = null; 
            this.tail = null; 
        } else {
            this.head = oldHead.next; 
            oldHead.next = null; 
            this.head.prev = null; 
        }

        this.length--; 
        return oldHead; 
    }

    unshift(val) {
        let newNode = new Node(val); 

        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.head.prev = newNode; 
            newNode.next = this.head; 
            this.head = newNode; 
        }

        this.length++; 
        return this; 
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined; 

        let count; 
        let current; 

        if (index <= this.length/2) {
            count = 0; 
            current = this.head; 

            while (count !== index) {
                current = current.next; 
                count++
            }
        } else {
            count = this.length - 1; 
            current = this.tail; 
            while (count !== index) {
                current = current.prev
                count--
            }
        }

        return current; 
    }

    set(index, val) {
        let foundNode = this.get(index); 

        if (foundNode) {
            foundNode.val = val; 
            return this
        }

        return false; 
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return undefined

        if (index === 0) return this.unshift(val); 

        if (index === this.length) return this.push(val); 

        let newNode = new Node(val); 

        let prev = this.get(index - 1); 
        let after = prev.next; 

        prev.next = newNode; 
        newNode.prev = prev; 

        after.prev = newNode; 
        newNode.next = after; 

        this.length++
        return this; 
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined; 

        if (index === 0) return this.shift(); 

        if (index === this.length) this.pop(); 

        let removedNode = this.get(index)
        let prev = removedNode.prev; 
        let after = removedNode.next; 

        prev.next = after; 
        after.prev = prev; 

        this.length--
        return removedNode; 
    }
}