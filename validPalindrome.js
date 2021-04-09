let s = "ab_a";
let myStr = s.replace(/[\W_]+/g, '').toLowerCase();
console.log(myStr);
let revStr = myStr.split('').reverse().join('');

if (myStr===revStr) {
    console.log(true);
} else {
    console.log(false);
}