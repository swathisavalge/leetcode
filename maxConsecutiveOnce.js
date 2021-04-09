// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0, max = 0;
//     for(let i=0; i<nums.length; i++){
//         console.log(`nums value is ${nums[i]} count is ${count} and max is ${max}`)
//         if(nums[i]===1){
//             count ++;
//             if(i<=nums.length && count > max ) {max = count} 
//         }else {
//             count = 0;
//         };
//     }
//     return max;
// };

// let myArr = [1,1,1,1,1,0,1,1,1,1,1,1,1,1];

// console.log(findMaxConsecutiveOnes(myArr));


let names = ['Alice', 'Bob', 'Tiff','Alice', 'Bruce','Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
    console.log(allNames[name]);
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }