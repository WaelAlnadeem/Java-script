function sum(a, b, c) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;   
}
// sum(1, 2); // returns 3
; 
console.log(sum(1, 2, 3));
