/**
 * LEETCODE
 * LEVEL - MEDIUM
 * https://leetcode.com/problems/rotting-oranges/description/
 * 
 * You are given an m x n grid where each cell can have one of three values:
 * 
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * 
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

const searchGrid = (grid) => {

    const [rows, cols] = [grid.length, grid[0].length];
    let total = 0;
    let queue = [];
    for(let r=0; r < rows; r++){
        for(let c=0; c < cols; c++){

            //if cell is empty
            if(grid[r][c] === 0){
                continue;
            }

            //if cell has rotten orange
            if(grid[r][c] === 2){
                queue.push([r, c])
            }

            total +=1;
            
        }
    }

    return {queue, total}
}



const orangesRotting = (grid) => {

    //get queue and totalOranges

    const {queue: q, total:totalOranges} = searchGrid(grid);

    const {minute, totalRotten} = bfs(grid, q)


    return totalRotten === totalOranges ? minute : -1
}



const getNeighbours = (grid, r, c) => {
    const neighbours = [];

    //up
    neighbours.push([r-1,  c])

    //down
    neighbours.push([r+1, c])

    //left
    neighbours.push([r, c-1])

    //right
    neighbours.push([r, c+1])

    //filter invalid
    return neighbours.filter(([_r, _c])=> _r >=0 && _c >=0 && _r < grid.length && _c < grid[0].length)
}

const rottenNew = (grid, q)=>{
    
    const [r, c] = q.shift(); //ie. q.dequeue;
    
    const neighbours = getNeighbours(grid, r, c);

    for(const [_r, _c] of neighbours){

        //rotten only if fresh
        if(grid[_r][_c] !== 1){
            continue;
        }

        grid[_r][_c] = 2;

        q.push([_r, _c]);
    }
}

const bfs = (grid, q) => {
    let totalRotten = 0;
    let minute = 0;
    while(q.length){ // ie. !queue.empty()
        totalRotten += q.length;

        let qLen = q.length;

        while(qLen > 0){
            rottenNew(grid, q);
            qLen --;
        }

        //if queue has elements, which means oranges were rotten
        if(q.length){
            minute += 1;
        }
        
    }

    return {minute, totalRotten}
}

