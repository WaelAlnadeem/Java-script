let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o1.foo);
// "bar"
o1.foo = "jalal";
console.log(o1.foo);
// "jalal"
console.log(o2.foo);
// "bar"
console.log(o3);
// foo: 'bar'
o2.foo = "wael";
console.log(o2.foo);
// "wael"
console.log(o3);
// foo : "wael"
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Sure it is because when o3 = o2 so o3 equal o2 , but when we chage to  o2 = o3 so the value of o2 will change to (o3)
