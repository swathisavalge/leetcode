var lengthOfLastWord = function(s) {
    if(s.length < 0) return 0;
    
    let myArr = s.trim().split(" ");
    let len = myArr.length;
    return (myArr[len-1].length)
    // var sArr = s.trim().split(' ');
    // if(sArr.length === 0){
    //   return 0;
    // }else{
    //   return sArr[sArr.length - 1].length;
    // }
};

console.log(lengthOfLastWord("a "));