var distributeCandies = function(candyType) {
    let uniqueCandy  = new Set(candyType)
    let halfCandies = candyType.length/2
    return (uniqueCandy.size >= halfCandies) ? halfCandies : uniqueCandy.size
    
};
let candyType = [1,1,2,2,3,3];
console.log(distributeCandies(candyType));