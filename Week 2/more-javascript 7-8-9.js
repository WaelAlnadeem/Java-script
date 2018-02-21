let arr = ["motorbike", "caravan", "bike", "car"];
console.log(arr[2]);

function vehicle(color, code, age) {
    if (age > 3 ) {
        console.log('a ' + color + ' used ' + arr[code]); 
    };
    if (age <= 3) {
        console.log("as good as new " + color + " " + arr[code]);
    };

};


vehicle("brown", 1, 5);
vehicle("Red", 2, 2);
