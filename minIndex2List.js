// var findRestaurant = function(list1, list2) {
//     let myVal = list1.filter((item) => list2.indexOf(item) >=0);
//     if(myVal.length != list1.length){
//         if(myVal.length > 1){
//             let indexSum = new Map();
//             for(let i=0; i<myVal.length; i++){
//                 indexSum.set(myVal[i], list1.indexOf(myVal[i]) + list2.indexOf(myVal[i]));
//             }
//             let minIndex = Math.min(...Array.from(indexSum.values()));

//             return getKey(minIndex,indexSum);

//         } else { return myVal;}
        
//     }else { return list2; } 
// };

var findRestaurant = function(list1, list2) {
    const commonInterest = [];
    
    list1.forEach((res, index1) => {
        const index2 = list2.indexOf(res);
        
        // collect an array of common interests with index sum as index
        if (index2 !== -1) {
            const indexSum = index1 + index2;
            
            if (!commonInterest[indexSum]) commonInterest[indexSum] = [];
            commonInterest[indexSum].push(res);
        }
    });
    
    // return the common interests with the minimum index sum
    for (let i = 0; i < commonInterest.length; i++)
        if (commonInterest[i]) return commonInterest[i];
};

let list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"];
console.log(findRestaurant(list1, list2));