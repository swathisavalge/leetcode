var isAnagram = function(s, t) {
    let g = t.split('');
    if(s.length!=t.length) return false;
    for(let i = 0; i<s.length; i++){
        let valIndex = g.indexOf(s[i]);
        if(valIndex>=0){
            g.splice(valIndex,1);
        }
    }
    if(g.length!=0) return false;
    return true;
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));