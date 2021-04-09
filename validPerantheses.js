var isValid = function(s) {
    // const openSym = ['(',  '[', '{' ] ;
    // const closeSym = [ ')', ']', '}' ];
    // console.log(openSym.indexOf(s[0]) + " close is " + closeSym.indexOf(s[1]));
    // if((openSym.includes(s[0])) && (openSym.indexOf(s[0])  === closeSym.indexOf(s[1]))){
    //     return true;
    // } else {
    //     return false;
    // }
  
    const mySymMap = {
        '(': ')',
        '[':']',
        '{': '}'
    } ;
     const temp = [];
    // for(let i=0; i<s.length; i++){
    //     if(s[i]==='{' || s[i]==='[' || s[i]==='(' ){
    //         temp.push[s[i]];
    //     } else {
    //         let val = temp.pop();
    //         if(val != s[i]) return false;
    //     }
    // }

    for(const brack of s){
        if(brack in mySymMap){
            temp.push(brack);
        }else {
            const brackVal = temp.pop();
            if(brack != mySymMap[brackVal]) return false
        }
    }
    return temp.length === 0;
};

console.log(isValid('([)]'));


