let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
// false
console.log(x === y);
// false
console.log(z == y);
// true
console.log(z == x);
// false

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

function check(a, b) {
    var check = a.length === b.length,
        result,
        len;
    if (!check) {
        result = false
    }
    else {
        // so far, they're the same
        result = true;
        len = a.length;
        for (var i = 0; result === true && i < len; i++) {
            console.log(i);
            if (a[i] !== b[i]) {
                result = false;

            }
        }
    }

    return result;
}

console.log(check(x, y));
