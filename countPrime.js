var countPrimes = function(n) {
    
    // let prmCnt = 0;
    // let pm = [];
    // if(n<2){ return 0};
    // for(let i=2; i<n; i++){
    //     let notPrmNum = false;
    //     for(let j=2; j<n; j++){
    //         if(i!=j && i%j===0){
    //             notPrmNum = true;
    //         }
    //     }
    //     if(notPrmNum===false){
    //         pm[prmCnt] = i;
    //         prmCnt ++;     
    //     }
    // }
    // console.log(pm);
    // return prmCnt;
    let sieve = Array(n+1).fill(true), ans = 0
    let myVal = [];
    for(let i = 2; i < n; i++){
        console.log("sieve value is at i = " + i + " is " + sieve[i]);
        if(sieve[i]){
            myVal[ans] = i;
            ans++
            for(let j = i; j <= n; j += i){
                console.log("j value is " + j + " " + sieve[j]);
                sieve[j] = false
                console.log("j value is after " + j + " " + sieve[j]);
            }
        }
    }
    console.log(myVal);
    return ans
};

console.log(countPrimes(10));