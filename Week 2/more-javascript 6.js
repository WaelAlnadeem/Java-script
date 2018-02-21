function vehicle(color, code, age) {
    if (code === 1 && age >= 3 ) {
        console.log(color + " used car");
    };
    if (code === 2 && age < 3) {
        console.log("as good as new " + color + " motorbike");
    };

};

vehicle("brown", 1, 5);
vehicle("Red", 2, 2);
    
