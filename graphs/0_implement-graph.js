class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);            
        }
    }

    removeEdge(v1, v2){
        if(!this.adjacencyList[v1] && this.adjacencyList[v2]) return
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v){
        if(!this.adjacencyList[v]) return;

        const targets = this.adjacencyList[v];

        for(const v2 of targets){
            this.removeEdge(v, v2)
        }

        delete this.adjacencyList[v]
    }

    dfsRecursive(start){
        const result = [];
        const visited = {};
        // visited[start] = true;
        const adjacencyList = this.adjacencyList;
        const dfs = (v) => {
            if(!v) return null;
            visited[v] = true;
            result.push(v);

            adjacencyList[v].forEach(next => {
                if(!visited[next]){
                    dfs(next);
                }
            })
        }

        dfs(start);
        return result;
    }
}