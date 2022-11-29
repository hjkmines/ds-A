// create a node constructor
class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}

// create our singly linked list constructor 
class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    //push 
    push(val) {
        //create a new node using the value passed to the function
        let newNode = new Node(val)

        // if there is no head property on the list, set the head and tail to be the newly craeted node
        if(!this.head) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            // otherwise set the next property on the tail to be the new node and set the tail
            // property on the list to be the newly created node

            // this creates our next arrow 
            this.tail.next = newNode; 
            // assign the new tail node to be at new node 
            this.tail = newNode
        }

        // update the length
        this.length++
        return this 
    }

    pop() {
        // if there are no nodes in the list, return undefined
        if(!this.head) return undefined

        let current = this.head; 
        let newTail = current; 

        // loop through the list until you reach the tail, you'll know your at the end if it returns null
        while (current.next) {
            // move the new tail to the current position
            newTail = current; 
            // move to the next node, last one will be null
            current = current.next; 
        }

        // set the tail to be the 2nd to the last node 
        this.tail = newTail; 

        // set the next property of the 2nd to the last node to be null
        this.tail.next = null; 

        // decrement by 1
        this.length--

        if (this.length === 0) {
            this.head = null; 
            this.tail = null; 
        }

        // return the value of the node removed
        return current
    }

    shift() {
        // if there are no nodes, return undefined
        if(!this.head) return undefined; 

        // store the current head property in a variable
        let currentHead = this.head; 

        // set the head property to be the current head's next property
        this.head = currentHead.next; 

        // decrement the length by 1
        this.length--

        // check if the list is empty after removing node 
        if (this.length === 0) {
            this.tail = null; 
        }

        // return the value of the node removed
        return currentHead; 
    }

    unshift(val) {
        // create a new node using the value passed to the function
        let newNode = new Node(val); 

        //if there is no head property on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode;
        } else {
            // otherwise set the newly created node's next property
            // to be the current head property on the list
            newNode.next = this.head; 

            // set the property of the head to the newly created node
            this.head = newNode; 
        }

        // increment the length by 1
        this.length++; 
        // return the entire linked list
        return this
    }

    get(index) {
        // edge cases
        if (index < 0 || index >= this.length) return null; 

        // set up our counter and initial start
        let counter = 0; 
        let current = this.head; 

        // loop through the list until you reach the index and return the node at that index
        while (counter !== index) {
            current = current.next
            counter++; 
        }

        return current; 
    }

    set(index, val) {
        // retrieve that node
        let foundNode = this.get(index); 

        // if the node is found, set the value of that node to be the value passed to the function
        if (foundNode) {
            foundNode.val = val; 
            return this; 
        }

        // if the node is not found, return false
        return false; 
    }

    insert(index, val) {
        // if the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false; 
        // if the index is equal to the length, push a new node to the end of the list
        if (index === this.length) return this.push(val)
        // if the index is 0, unshift a new node at the start of the list
        if (index === 0) return this.unshift(val); 

        // create a new node 
        let newNode = new Node(val); 

        //retrieve the prev
        let prev = this.get(index - 1); 
        let temp = prev.next; 

        // set the new property on that node to be the new node
        prev.next = newNode; 

        // set the next property on the new node to be the previous next
        newNode.next = temp; 

        // increment the length
        this.length++

        return this; 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined; 

        if (index === 0) return this.shift()

        if (index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        let removed = prevNode.next; 

        prevNode.next = removed.next; 

        this.length--

        return removed
    }
}

const newList = new SinglyLinkedList()
newList.push(9)