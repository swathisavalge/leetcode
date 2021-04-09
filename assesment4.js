// let myArr = [1,1,2,3,7,9,3,7,11,1];
// //find the set of elements  which occur  more than 1

// const dub = (myArr) => {
//     let len =  myArr.length;
//     let newArr = new Map();
//     for(let i = 0; i<len; i++){
//         if(newArr.has(myArr[i])){
//             newArr.set(myArr[i], newArr.get(myArr[i])+1);
//         }else {newArr.set(myArr[i],1)}
//     }
//     let myIndArr = Array.from(newArr.values());
//     let myValueArr = Array.from(newArr.keys());
//     let maxcnt = myIndArr.indexOf(Math.max(...myIndArr));
//     return myValueArr[maxcnt];
// }

// console.log(dub(myArr));


const amst = (myint) => {
    let check = myint, c = 0;
    let len = myint.toString().length;

    while(myint > 0){
        c += Math.pow(myint%10,len);
        myint = Math.floor(myint/10);
    }

    return (c===check);
}

console.log(amst(1634));