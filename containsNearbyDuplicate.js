var containsNearbyDuplicate = function(nums, k) {
    let myArr = new Map();
    for(let i=0; i<nums.length; i++){
        if(myArr.has(nums[i]) !=false){
            if(i-myArr.get(nums[i]) <= k){
                return true;
            } 
        }
        myArr.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));