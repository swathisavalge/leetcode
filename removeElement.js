var removeElement = function(nums, val) {
    for(let i=0; i<=nums.length; i++){
        console.log(nums.length);
        if((nums[i]-val) === 0){
            nums.splice(i,1);
            i-=1;
        }
    }
    return nums.length;  
}


let num = [3,3];
console.log(removeElement(num,3));
console.log(num);

