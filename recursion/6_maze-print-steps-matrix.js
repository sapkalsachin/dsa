
const printMetrix = (p="", maze, r, c, path, step) => {


    if(r === maze.length - 1 && c === maze[0].length - 1){
        path[r][c] = step;
        for(const row of path){
            console.log(row.toString());
        }
        console.log(p, "\n\n")
        return;
    }

    //if already visited
    if(!maze[r][c]){
        return;
    }

    //if not mark visited
    maze[r][c] = false;
    path[r][c] = step;

    //left
    if(c > 0){
        printMetrix(p + 'L', maze, r, c-1, path, step + 1)
    }

    //right
    if(c < maze[0].length - 1){
        printMetrix(p + 'R', maze, r, c+1, path, step + 1)
    }

    //up
    if(r > 0){
        printMetrix(p + 'U', maze, r-1, c, path, step + 1)
    }

    //down
    if(r < maze.length - 1){
        printMetrix(p + 'D', maze, r+1, c, path, step + 1)
    }

    //unmark visited while returning
    maze[r][c] = true;
    path[r][c] = 0;
}

var m = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
]

var path = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

printMetrix("", m, 0, 0, path, 1)
