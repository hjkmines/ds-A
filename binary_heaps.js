class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element); 
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx];

            if (element < parent) break; 

            //reassign the values 
            this.values[parentIdx] = element; 
            this.values[idx] = parent; 

            idx = parentIdx
        }
    }

    extractMax() {
        const removed = this.values[0];

        const end = this.values.pop(); 

        if (this.values.length) {
            this.values[0] = end; 

            this.sinkDown()
        }
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length; 
        const element = this.values[0]; 

        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2

            let leftChild
            let rightChild

            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx; 
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }

            if (!swap) break;

            this.values[idx] = this.values[swap]
            this.values[swap] = element;

            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap(); 
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(12)
heap.insert(55)
heap.extractMax()

class Node {
    constructor(val, priority) {
        this.val = val; 
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2); 
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break; 
            this.values[parentIdx] = element; 
            this.values[idx] = parent; 

            idx = parentIdx; 
        }
    }

    dequeue() {
        const removed = this.values[0];
        const end = this.values.pop(); 

        if (this.values.length) {
            this.values[0] = end; 
            this.sinkDown();
        }

        return removed;
    }

    sinkDown() {
        let idx = 0; 
        const length = this.values.length; 
        const element = this.values[0]; 

        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2

            let leftChild; 
            let rightChild; 
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx; 
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (!swap && rightChild.priority < element.priority) ||
                    (swap && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }

            if (!swap) break; 
            this.values[idx] = this.values[swap]
            this.values[swap] = element; 

            idx = swap
        }
    }
}

let hospital = new PriorityQueue()
hospital.enqueue('cold', 8)
hospital.enqueue('leg cut off', 1)
hospital.enqueue('tongue cut off', 2)
hospital.enqueue('broken bone', 4)
hospital.enqueue('paper cut', 9)
console.log(hospital)
