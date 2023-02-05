
View on Github
/**
 * https://leetcode.com/problems/number-of-islands/
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid, connectedComponents = 0) {
    const [ rows, cols ] = [ grid.length, grid[0].length ]

    for (let row = 0; row < rows; row++) {/* Time O(ROWS) */
        for (let col = 0; col < cols; col++) {/* Time O(COLS) */
            const isIsland = grid[row][col] === '1'
            if (isIsland) connectedComponents++

            dfs(grid, row, rows, col, cols);    /* Space O(ROWS * COLS) */
        }
    }

    return connectedComponents
};

const dfs = (grid, row, rows, col, cols) => {
    const isBaseCase = grid[row][col] === '0';
    if (isBaseCase) return;

    grid[row][col] = '0';

    for (const [ _row, _col ] of getNeighbors(row, rows, col, cols)) {
        dfs(grid, _row, rows, _col, cols);      /* Space O(ROWS * COLS) */
    }
}

var getNeighbors = (row, rows, col, cols) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ _row, _col ]) => [ (row + _row), (col + _col) ])
    .filter(([ _row, _col ]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols))
