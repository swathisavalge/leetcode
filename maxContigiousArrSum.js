var maxSubArray = function(nums) {
    let globalSum = nums[0];
    if(nums.length <= 1) return nums[0];
    
    for(let i=0; i<=nums.length; i++){
        let maxSum = nums[i];
        let total = nums[i];
        for(let j=i+1; j<=nums.length-i; j++){
            if(typeof(nums[j]) != "undefined"){
                total += nums[j];
                if(total > maxSum){
                    maxSum = total;
                    if(maxSum > globalSum){
                        globalSum = maxSum;
                    }
                }
            } else {
                if(nums[i] > globalSum){
                    return nums[i]
                } else {
                    return globalSum
                }
            }

        }
    }
    return globalSum;
};

console.log(maxSubArray([-2,1]));