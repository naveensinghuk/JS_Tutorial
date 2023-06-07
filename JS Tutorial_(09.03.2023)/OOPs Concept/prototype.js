// let person1={};
// console.log(person1)
// let person2={
//     name:"naveen"
// }
// console.log(person2.hasOwnProperty('name'))

// function Person(name){
//     this.Name=name;
// };
// let person3=new Person("naveen")
// console.log(person3);

// use of prototype.........

// function Person(first,last,a){
//     this.firstName=first,
//     this.lastName=last,
//     this.age=a
    
// }
// let person1=new Person("naveen", "rautela","26");
// let person2=new Person("kamal", "rautela","28");


// Person.prototype.fullName=function(){
//     console.log(this.firstName+ " "+  this.lastName)

// };

// console.log(person2.fullName());

// console.log(person1);

// inheritance........
function Creature(is){
    this.lifespan=is;
}
Creature.prototype.breath=function(){
    console.log("beathing");
}
let Creature1=new Creature(100);
console.log(Creature1)

function Person(first,last,a){
    this.firstName=first;
    this.lastName=last;
    this.age=a;
    
}

Person.prototype.__proto__= Object.create(Creature.prototype);



let person1=new Person("naveen", "rautela","26");
let person2=new Person("kamal", "rautela","28");
console.log(person1);
console.log(person2);

