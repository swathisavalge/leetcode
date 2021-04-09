var twoSum = function(numbers, target) {
    let l=0,r=numbers.length-1;
    while(l<r) {
        if(numbers[l]+numbers[r]==target){
            return([l+1 ,r+1]);
        } else if((numbers[l]+numbers[r]) < target){
            ++l;
        } else {
                --r;
        }
    }
    return {};
};

let numbers = [0,0,3,4], target = 0;
console.log(twoSum(numbers, target));
console.log(4%2);
