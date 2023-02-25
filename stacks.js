class Node {
    constructor(val) {
        this.value = value; 
        this.next = null; 
    }
}

class Stack {
    constructor() {
        this.top = null; 
        this.bottom = null; 
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.size) {
            this.top = newNode; 
            this.bottom = newNode; 
        } else {
            const temp = this.top; 

            this.top = newNode; 
            this.top.next = temp;
        }

        this.size++
        return this;
    }

    pop() {
        if (!this.size) return null; 

        let poppedNode = this.top; 

        if (this.size === 1) {
            this.top = null; 
            this.bottom = null; 
        }

        this.top = this.top.next // poppedNode.next
        this.size--
        return poppedNode;
    }
}