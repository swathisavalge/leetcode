const mapVal = { 'I' : 1, 'V' : 5, 'X' : 10, "L" : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };

const  s = "MCMXCIV";
let romConver = 0;

for(let i = 0; i<s.length; i++){
    if(mapVal[s[i]] < mapVal[s[i+1]]){

        romConver -= mapVal[s[i]];
    } else {
        romConver += mapVal[s[i]];
    }
}

console.log(romConver);