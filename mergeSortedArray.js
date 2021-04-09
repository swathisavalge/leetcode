var merge = function(nums1, m, nums2, n) {
    let oneIni = m-1;
    let twoIni = n-1;
    for(let i=m+n-1; i>=0; i--){
        if(twoIni < 0){
            break;
        }
        console.log(nums1[oneIni] + " < " + nums2[twoIni]);
        if(nums1[oneIni]<nums2[twoIni]){
            nums1[i] = nums2[twoIni];
            twoIni --;
            
        } else {
            nums1[i] = nums1[oneIni];
            oneIni--;
        }
    }
    return nums1;
};

let nums1 = [0], m = 0;
let nums2 = [1], n=1;

console.log(merge(nums1,m,nums2,n));
