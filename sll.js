class Car {
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }

    drive() {
        console.log('driving')
    }
    stop() {
        console.log('stopping')
    }
}

const bmw = new Car('bmw', 90000)

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
        let newNode = new Node(val)

        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length++
        console.log('watch this', this)
        return this;
    }

    pop() {
        if (!this.length) return; 

        let current = this.head; 
        let newTail = current; 

        while (current.next) {
            newTail = current; 
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null; 
            this.tail = null; 
        }

        return current; 
    }

    shift() {
        if (!this.length) return; 

        let removedHead = this.head; 

        this.head = removedHead.next
        this.length-- 

        if (this.length === 0) {
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
            newNode.next = this.head; 
            this.head = newNode
        }

        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return 
        let counter = 0; 
        let current = this.head; 

        while (counter !== index) {
            current = current.next; 
            counter++
        }

        return current; 
    }

    set(index, val) {
        let foundNode = this.get(index); 

        if (foundNode) {
            foundNode.val = val;
            return this;  
        }

        return false; 
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return; 

        if (index === this.length) return this.push(val)

        if (index === 0) return this.unshift(val)

        let newNode = new Node(val)

        let prevNode = this.get(index - 1)
        let temp = prev.next; 

        prevNode.next = newNode; 
        newNode.next = temp; 
        this.length++; 
        return this; 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return; 
        if (index === 0) return this.shift(); 
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1)
        let removed = prevNode.next; 

        prev.next = removed.next
        this.length--; 
        return removed;
    }
}

