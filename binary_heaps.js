class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)

            let parent = this.values[parentIdx]; 

            if (element <= parent) break; 

            this.values[parentIdx] = element; 
            this.value[idx] = parent; 

            idx = parentIdx;
        }
    }
}