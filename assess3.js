function reverseString(myStr) {
    let strArr = [];
  
    
    for(let i=myStr.length-1; i>=0; i--){
      let  newStr = myStr.charAt(i);
      strArr.push(newStr);
    }
    
    let finStr = strArr.join("");
    
    return finStr;
  }

  
function reverseWordOnly(myStr) {
    let strArr = [];
    strArr = myStr.split(" ");
  
    for(let i=0; i<=strArr.length-1; i++){
      let revWord = reverseString(strArr[i]);
      strArr[i] = revWord;
    }
    let finRev = strArr.join(" ");
      
    return finRev;
  }
  

  console.log(reverseWordOnly("Walmart is my company"));

  function reverseString(myStr) {
    let strArr = [];
  
    
    for(let i=myStr.length-1; i>=0; i--){
      let  newStr = myStr.charAt(i);
      strArr.push(newStr);
    }
    
    let finStr = strArr.join("");
    
    return finStr;
  }
  
  console.log(reverseString("Walmart is my company"));
  
  
  function wordRev(myWord){
    let strArr = [];
    strArr = myWord.split(" ");
    let RevWord = [];
    
    
    for(let i=strArr.length-1; i>=0; i--){
      RevWord.push(strArr[i]);
    }
  let finRev = RevWord.join(" ");
    
    return finRev;
  }
  
  console.log(wordRev("Walmart is my company")); 
  
  function reverseWordOnly(myWord) {
    let strArr = [];
    strArr = myWord.split(" ");
  
    for(let i=0; i>=strArr.length-1; i++){
      let revWord = reverseString(strArr[i]);
      strArr[i] = revWord;
      console.log(strArr);
    }
    let finRev = strArr.join(" ");
      
    return finRev;
  }
  
  console.log(reverseWordOnly("Walmart is my company"));
  