// Before ES6 Inheritance....

function Creature(Is){// this is construcotr funtion.....
    this.life=Is;
};
Creature.prototype.breath=function(){// this is method add through prototype.....
    console.log("Breathing..");
};
let creature1=new Creature(100);

console.log(creature1);




function Person(first,last,age){
    this.firstName= first;
    this.lastName=last;
    this.age=age;
};

Person.prototype.fullName=function(){
    console.log(this.firstName+" "+ this.lastName);
};


//__proto__  it is an internal property of an object........
// prototype is property is function object.......

Person.prototype.__proto__=Object.create(Creature.prototype)// person prototype connet to creature prototype. this is called inhertance there(__proto__) is copy to data of creature object to person...........

let person1=new Person("naveen","singh",26);
console.log(person1);
let person2=new Person("deepak","kumar",28);
console.log(person2.breath());
console.log(person2.fullName());




function Name(){
    this.name="naveen singh ";
    this.lastname="rautela"
  
};

Name.prototype.fullname=function(){
    console.log("first hai")
};


let name1=new Name("first function ");
console.log(name1)
name1.fullname();

Nameone.prototype.__proto__ =Object.create(Name.prototype);// object.create use for connector


function Nameone(){

    
};
Nameone.prototype.totaldata=function(){
    console.log("second hai")
}


let nameone1=new Nameone();
console.log(nameone1.totaldata());






















