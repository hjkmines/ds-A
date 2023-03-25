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

    depthFirstIterative(start) {
        const stack = [start]

        const result = []; 

        const visited = {}; 

        const adjList = this.adjList;

        let currentVertex; 
        visited[start] = true; 

        while (stack.length) {
            currentVertex = stack.pop(); 
            result.push(currentVertex)
            
            adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[currentVertex] = true; 
                    
                    stack.push(neighbor)
                }
            })
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

g.addVertex('DAL')
g.addVertex('SAN')
g.addVertex('HOU')
g.addEdge('SAN', 'DAL')
g.addEdge('HOU', 'DAL')
g.addEdge('HOU', 'SAN')
g.removeVertex('HOU')

console.log(g)
