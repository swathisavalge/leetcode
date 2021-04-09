var reverseString = function(s) {
    for (let left = 0, right = s.length-1; left < right; left++, right--) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
    }  
  };

  reverseString(["h","e","l","l","o"]);