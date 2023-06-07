// call by value method..........

let a=15;
let b=a;
let x=8;
console.log( `b = `+  b);// call by value method..........
console.log(`x = `+x);// call by value method..........



// call by refrence method.........
let obj={
    name:   "naveen",
    id:     123,
    address:    "delhi"
};
obj.lastname="rautela"
let obj1=obj;
obj1.fullName="deepak singh rautela";
console.log(obj);
console.log(obj1)

let array=[3,5,6,5,4,2];
array.push=50;
console.log(array);


