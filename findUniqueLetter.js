var firstUniqChar = function(s) {
    let g = s.split('');
    for(let i=0; i<s.length; i++){
        g.splice(i,1);
        if(g.indexOf(s[i])<0){
            return i;
        }
        g = s.split('');
    }
    return -1;
};

console.log(firstUniqChar("adaccdcda"));