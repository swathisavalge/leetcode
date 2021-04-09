var findTheDifference = function(s, t) {
    for(let i=0; i<t.length; i++){
        let indi = t.indexOf(s[i]);
        if(indi<0){
            return t[i];
        }
    }
};
let s = "ae", t = "aea";
console.log(findTheDifference(s,t));
let g = "3";
console.log(g%10);