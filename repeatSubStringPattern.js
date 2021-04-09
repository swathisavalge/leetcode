let repeatedSubstringPattern = function(s) {
    console.log(s.repeat(2));
    console.log(s.repeat(2).slice(1, -1));
    console.log(s.repeat(2).slice(1, -1).includes(s));
};

console.log(repeatedSubstringPattern("abcabcabcabc"));