// OOP

class Car {
    constructor(brand, model, color, price) {
        this.brand = brand;
        this.model = model;
        this.color = color; 
        this.price = price; 
    }

    drive() {
        console.log('DRIVE!!!!')
    }

    push() {
        console.log('stop!!!')
    }
}

const gt63 = new Car('Mercedes', 'GT-63', 'matte-black', '88000')

const arr1 = new Array()
arr1.push(1)

console.log(arr1)


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
        let newNode = new Node(val); 

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

    shift() {
        if (!this.length) return 

        let removedNode = this.head; 

        this.head = removedNode.next; 

        this.length--

        if (!this.length) {
            this.head = null; 
            this.tail = null; 
        }

        return removedNode;
    }

    pop() {
        if (!this.length) return 
        let current = this.head; 
        let newTail = current; 

        while (current.next) {
            newTail = current; 
            current = current.next; 
        }
        
        this.tail = newTail; 
        this.tail.next = null; 
        this.length-- 

        if (!this.length) {
            this.head = null; 
            this.tail = null; 
        }

        return current
    }
    unshift(val) {
        let newNode = new Node(val); 

        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head; 
            this.head = newNode
        }
        this.length++

        return this; 
    }

    get(index) {
        if (index < 0 || index >= this.length) return null; 
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
            return true;
        } else {
            return false; 
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false; 
        if (index === this.length) return this.push(val); 
        if (index === 0) return this.unshift(val); 

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next; 

        prev.next = newNode; 
        newNode.next = temp

        this.length++
        return this; 
    }
}