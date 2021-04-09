var islandPerimeter = function(grid) {
    let row = grid.length, column = grid[0].length;
    let peri = 0;
    
    for(let i=0; i<row; i++){
        for(let j=0; j<column; j++){   
            if(grid[i][j]){
                peri +=4;
                if(i>0 && grid[i-1][j]===1) peri--;
                console.log(`after first if for grid[${i-1}][${j}] peri is ${peri}`);
                if (i < row-1 && grid[i+1][j] === 1) peri--;
                console.log(`after 2nd if for grid[${i+1}][${j}] peri is ${peri}`);
                if (grid[i][j-1] === 1) peri--;
                console.log(`after 3rd if for grid[${i}][${j-1}] peri is ${peri}`);
                if (grid[i][j+1] === 1) peri--;
                console.log(`after 4th if for grid[${i}][${j+1}] peri is ${peri}`);
                console.log(`my i is ${i}, and my j is ${j} and perimeter count is ${peri}`); 
            }  
        }
    }
    return peri;
};

let myArr = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
console.log(islandPerimeter(myArr));