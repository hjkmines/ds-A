class Graph {
    constructor() {
        this.adjList = {}; 
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = []; 
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        while (this.adjList[vertex].length) {
            const adjVertex = this.adjList[vertex].pop()

            this.removeEdge(vertex, adjVertex)
        }

        delete this.adjList[vertex]
    }

    depthFirstRecursive(start) {
        const result = []; 

        const visited = {}; 
        const adjList = this.adjList; 

        (function dfs(vertex) {
            if (!vertex) return null; 
            visited[vertex] = true; 
            result.push(vertex); 

            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor)
            })
        })(start)

        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    breadthFirst(start) {
        const queue = [start]

        const result = []

        const visited = {}

        const adjList = this.adjList; 

        let currentVertex; 

        visited[start] = true; 
        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex); 

            adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }

        return result
    }
}

const g = new Graph(); 

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.depthFirstIterative('A'))
