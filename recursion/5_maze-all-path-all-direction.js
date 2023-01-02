const allPath = (p, maze, r, c)=> {

    // print if current cell is last cell
    if((r === maze.length - 1) && (c === maze[0].length - 1)){
        console.log(p);
        return;
    }


    //return if current cell has been already visited
    if(!maze[r][c]){
        return
    }


    //if not, mark this cell as visited and move to all directions
    maze[r][c] = false;
    
    //right
    if(c < maze[0].length){
        allPath(p + 'R', maze, r, c+1);
    }

    //down
    if(r < maze.length - 1){
        allPath(p + 'D', maze, r+1, c);
    }

    //up
    if(r > 0){
        allPath(p + 'U', maze, r-1, c);
    }

    //Left
    if(c > 0){
        allPath(p + 'L', maze, r, c - 1 )
    }


    //while returning back, un-mark this cell, so that it is available for other paths
    
    maze[r][c] = true;
    
}