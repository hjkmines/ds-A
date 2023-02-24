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
        this.adjList[v1] = this.adjList[v1].filter( v => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter( v => v !== v1)
    }

    removeVertex(vertex) {
        while (this.adjList[vertex].length) {
            const adjVertex = this.adjList[vertex].pop()

            this.removeEdge(vertex, adjVertex)
        }

        delete this.adjList[vertex]
    }

    depthFirstRecursive(start) {
        // create a list to store the end of result, to be returned at the very end
        let result = []; 

        // create a object to store visited vertices
        let visited = {}; 

        let adjList = this.adjList

        (function dfs(vertex){
            if(!vertex) return null; 
        })(start)
    }
}

let g = new Graph(); 

g.addVertex('Houston')
g.addVertex('Austin')
g.addVertex('Dallas')
g.addVertex('NewYork')
g.addEdge('Dallas', 'Houston')
g.addEdge('Dallas', 'Austin')
g.addEdge('Dallas', 'NewYork')

g.removeVertex('NewYork', 'Dallas')

console.log(g)