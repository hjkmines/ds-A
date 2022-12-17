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

    shift() {
        if (!this.head) return; 

        let removedNode = this.head; 

        this.head = removedNode.next; 

        this.length--
        if(!this.length) {
            this.head = null; 
            this.tail = null; 
        }

        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val); 

        if (!this.head) {
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
        if (index < 0 || index >= this.length) return;

        let counter = 0; 
        let current = this.head; 

        while (counter !== index) {
            current = current.next
            counter++
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

        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)

        let newNode = new Node(val); 

        let prev = this.get(index - 1)
        let temp = prev.next; 

        prev.next = newNode; 

        newNode.next = temp

        this.length++
        return this; 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return; 

        if (index === 0) return this.shift()

        if (index === this.length - 1) return this.pop(); 

        let prevNode = this.get(index - 1); 
        let removedNode = prevNode.next; 

        prevNode.next = removedNode.next
        this.length--
        return removedNode;
    }
}