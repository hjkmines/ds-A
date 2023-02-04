// UNDIRECTED graph 

class Graph {
    constructor() {
       this.adjacencyList = {};  
    }
    addVertex(vertex) {
        /* this should add a key to the adjancey list with
        the name of the vertex and set its value to a empty array
        */
       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }
    addEdge(v1, v2) {
        // find in the list the key of v1 and v2 in that array
        this.adjacencyList[v1].push(v2)
        // find in the list the key of v2 and v1 in that array
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        //the function should reassign the key of v1 to be a array without v2
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        //the function should reassign the key of v2 to be a array without v1
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(v) {
        while (this.adjacencyList[v].length) {
            const adjacencyVertex = this.adjacencyList[v].pop(); 
            //call our removeEdge with the v we are trying to remove and any values in the adj list for that vertex
            this.removeEdge(v, adjacencyVertex)
        }
        //delete the vertex
        delete this.adjacencyList[v];
    }
}

const stationGraph = new Graph(); 
stationGraph.addVertex('DAL');
stationGraph.addVertex('AUS');
stationGraph.addVertex('HOU');
stationGraph.addEdge('DAL', 'AUS')
stationGraph.addEdge('HOU', 'AUS')
stationGraph.addEdge('HOU', 'DAL')
stationGraph.removeEdge('DAL', 'AUS')
stationGraph.removeVertex('AUS')

console.log(stationGraph)