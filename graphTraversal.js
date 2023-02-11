class Graph {
    constructor() {
        this.adjacencyList = {}; 
    }

    depthFirstRecursive(start) {
        let result = []; 
        let visited = {};

        let adjacencyList = this.adjacencyList; 

        (function dfs(vertex) {
            if (!vertex) return null; 
            visited[vertex] = true; 

            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor)
            })
        })(start)

        return result;
    }

    depthFirstIterative(start) {
        let stack = [start]; 
        let result = []; 
        let visited = {}; 

        let currentVertex; 

        visited[start] = true; 

        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex); 

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; 
                    stack.push(neighbor)
                }
            })
        }

        return result; 
    }

    breadthFirst (start) {
        let queue = [start]; 

        let result = []; 

        let visited = {}

        let currentVertex; 

        visited[start] = true; 

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex); 

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; 
                    queue.push(neighbor)
                }
            })
        }

        return result; 
    }
}