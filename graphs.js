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
}

const g = new Graph(); 

g.addVertex('DAL')
g.addVertex('SAN')
g.addVertex('HOU')
g.addEdge('SAN', 'DAL')
g.addEdge('HOU', 'DAL')
g.addEdge('HOU', 'SAN')
g.removeVertex('HOU')

console.log(g)
