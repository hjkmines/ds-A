
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    // Push the value into the values property on the heap
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    // Bubble Up:
    bubbleUp(){
        // Create a variable called index which is the length of the values property - 1
        // find the last element that was inserted
        let idx = this.values.length - 1;
        // store the value of the index itself
        const element = this.values[idx];


        while(idx > 0){
            // Create a variable called parentIndex which is the floor of (index-1)/2
            let parentIdx = Math.floor((idx - 1)/2);
            // store the parent value to compare to the inserted new value
            let parent = this.values[parentIdx];
            // Keep looping as long as the values element at the parentIndex 
            // is less than the values element at the child index
            if(element <= parent) break;
            // Swap the value of the values element at the parentIndex with 
            // the value of the element property at the child index
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Set the index to be the parentIndex, and start over!
            idx = parentIdx;
        }
    }
    // REMOVING
    extractMax() {
        // Swap the first value in the values property with the last one
        const max = this.values[0];
        // Pop from the values property, so you can return the value at the end.
        const end = this.values.pop(); 
        if (this.values.length > 0) {
            this.values[0] = end; 
            // Have the new root "sink down" to the correct spot...​
            this.sinkDown()
        }
        // Return the old root!
        return max; 
    }
    sinkDown(){
        // Your parent index starts at 0 (the root)
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
            let leftChildIdx = 2 * idx + 1;
            // Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
            let rightChildIdx = 2 * idx + 2;
            // set the left and right child as undefind because there is no guarantee that the left and right childs exist
            let leftChild,rightChild;
            // keeps tracks if we did any swaps in the loop
            let swap = null;
            
            // check if the left child is in BOUNDS
            // If the left or right child is greater than the element...swap. 
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    // The child index you swapped to now becomes the new parent index.  
                    swap = leftChildIdx;
                }
            }
            // If both left and right children are larger, swap with the largest child.
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    // left child was not swapped, and right child is bigger
                    (swap === null && rightChild > element) || 
                    // or left child was swapped but right child is bigger
                    (swap !== null && rightChild > leftChild)
                ) {
                    // The child index you swapped to now becomes the new parent index.  
                    swap = rightChildIdx;
                }
            }
            // Keep looping and swapping until neither child is larger than the element.
            if (swap === null) break;
            // now swap the parent and the child
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            // now move down the tree and start the process again by starting your NEW index at the swapped child
            idx = swap;
            }
        }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// for min heap
class PriorityQueue {
    constructor(){
        this.values = []; 
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
