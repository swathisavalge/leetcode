var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        digits[i] = digits[i] + 1;
        if(digits[i]===10){
            digits[i] = 0;
        }else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([9]));
