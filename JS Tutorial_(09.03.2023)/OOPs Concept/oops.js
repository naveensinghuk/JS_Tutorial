// Manage manager and engineer.
let person1={
    firstName: "naveen",
    lastName:  "Rautela",
    age:     26,
    fullName:  function(a,b){
        
        let c=a+b;
        console.log(c);
        console.log(this.firstName + ' '+ this.lastName+' '+ this.age);
    }
};
console.log(person1);
person1.age=30;

console.log(person1.firstName);

console.log(person1.age)
console.log(person1.fullName(2,5));


// this is second way to create object where can be add properties.
let person2={};
person2.firstName="kamal";
person2.sayhi=function(){
    console.log("this is second way to create object")
}
console.log(person2);
console.log(person2.sayhi());



// this is third to create object in java script...........
let person3=new Object;
person3.firstName="rahul";
console.log(person3);




