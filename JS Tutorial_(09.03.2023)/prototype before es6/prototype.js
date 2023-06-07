let person1={};
console.log(person1);
let person2={
    name: "naveen"
};
console.log(person2);

function Person( name,age){// this is constructor function and there is create a another prototype . where first prototype is constructor function protoype and second prototype is inbuild java script prototype
    this.n=name,
    this.a=age
};
let person3=new Person("naveen",27);
console.log(person3);

// how to use of prototype.
function Man(first, last, a){
    this.firstName=first,
    this.lastName=last,
    this.age=a;
    // this.fullname=function(){
    //     console.log(this.firstName+' '+ this.lastName)
    // }
};

Man.prototype.fullName=function (){// this is method atteched with constructor function prototype............
    console.log(this.firstName+ " " + this.lastName)
}

let firstman=new Man("rohit","singh",25);
let secondman=new Man("rahul","kumar",25);
console.log(firstman)
console.log(secondman)

console.log(firstman.fullName())




