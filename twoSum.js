let nums = [3,3];
let target = 6;

var twoSum = function(nums, target) {
    let result = [];
    nums.forEach((num, index, nums) => {
        let checkIndex = nums.indexOf(target-num);
        if(checkIndex > -1 && index!=checkIndex && !result.includes(checkIndex)) {
            result.push(index, checkIndex);
        }
    });
    
    console.log(result);
};

twoSum(nums,target);