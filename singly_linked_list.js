class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(val) {
        // create a new node using the value passed to the function
        let newNode = new Node(val); 

        // if the linked list empty, set the head and tail to be the new Node
        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            // otherwise, set the next property on the tail and set the tail to be
            // the newly created node
            this.tail.next = newNode; 
            this.tail = newNode
        }

        //update the length
        this.length++; 
        return this; 
    }

    pop() {
        //if there are no nodes, in the list, return undefined
        if (!this.head) return undefined
        let current = this.head; 
        let newTail = current; 

        // loop trhough the list until you reach the tail, you'll know your at the
        // end if the current.next is null
        while(current.next) {
            // move the new tail to the current position
            newTail = current; 
            // move to the next node, last one will be undefined
            current = current.next; 
        }

        // set the tail to be the 2nd to last node
        this.tail = newTail; 

        // set the next property of the 2nd to last node to equal null
        this.tail.next = null; 

        // decrement the length by 1
        this.length--; 

        // if after removing the node, linked list is empty, set the head/tail to be null
        if (!this.length) {
            this.head = null; 
            this.tail = null; 
        }

        // return the value of the node removed
        return current; 
    }

    shift() {
        // if there are no nodes, return undefind
        if (!this.head) return undefined

        // store the current head property in a variable
        let removed = this.head; 

        // set the new head property to be the next head property
        this.head = removed.next; 

        this.length--
        if (!this.length) {
            this.tail = null; 
        }

        return removed;
    }

    unshift(val) {
        // create a new node to add in the beginning
        let newNode = new Node(val); 

        // if there is no list, assign the new node as both head and tail, otherwise re-assign
        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            newNode.next = this.head; 
            this.head = newNode; 
        }

        this.length++; 

        return this; 
    }

    get(index) {
        // edge case
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
        }

        return false;
    }

    insert(index, val) {
        // edge case
        if (index < 0 || index > this.length) return false; 

        // when its at the end
        if (index === this.length) return this.push(val); 

        // when its at the beginning
        if (index === 0) return this.unshift(val); 

        let newNode = new Node(val)

        let prev = this.get(index - 1); 
        let temp = prev.next; 

        prev.next = newNode; 
        newNode.next = temp; 

        this.length++
        return this; 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined; 

        if (!index) return this.shift()

        if (index === this.length - 1) return this.pop(); 

        let prev = this.get(index - 1)
        let removed = prev.next

        prev.next = removed.next

        this.length--; 
        return removed;
    }
}

const newLinkedList = new SinglyLinkedList()
newLinkedList.push(9)
newLinkedList.push(99)
console.log(newLinkedList.pop())

console.log(newLinkedList)