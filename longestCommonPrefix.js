const strs = [ "flower","flow","flowr", "flown"];

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
     for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        const str = strs[j];
         if (str[i] !== strs[0][i]) return str.slice(0, i);
      }
    }
     return strs[0];
}

console.log(longestCommonPrefix(strs));