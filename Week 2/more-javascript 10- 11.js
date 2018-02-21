let arr = ["motorbike", "caravan", "bike", "car"];
var ad = "Amazing Joe's Garage, we service ";
for (var i = 0; i < arr.length -2; i++){
    ad += arr[i] + ", "
};
ad += arr[arr.length - 2] + " and " + arr[arr.length - 1] + "." ;
console.log(ad);

console.log("Yes I can have that added to the advertisement without changing the code" );
// try it :)
