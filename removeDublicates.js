var removeDuplicates = function(nums) {

    for (let i =(nums.length)-1; i>=0; i-- ){
        if(nums[i]===nums[i-1]){
            nums.splice(i-1,1);
        }
    }
    return(nums.length);
};


// var removeDuplicates = function(nums) {
// 	if(nums === null || nums.length === 0) return 0;
// 	if(nums.length == 1) return 1;
// 	var count = 0;
//     for(var i = 0; i< nums.length; i++) {
//         if(nums[i] != nums[i+1]){
//             count ++;
//             nums[count] = nums[i+1];
//         }
//     }
//     return count;
// };

let nums = [1,1,2];
console.log(removeDuplicates(nums));