var thirdMax = function(nums) {
    let finalArr = nums.sort((a,b)=> a-b);
    for (let i =(finalArr.length)-1; i>=0; i-- ){
        if(finalArr[i]===finalArr[i-1]){
            finalArr.splice(i-1,1);
        }
    }
    let arrLen = finalArr.length;
    if(arrLen>=3) return finalArr[arrLen-3];
    return finalArr[finalArr.length-1];
};

console.log(thirdMax([2,1]));