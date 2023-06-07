// Before ES6 oop concept;
let person1={
    firstName:"naveen",
    lastName: "Rautela",
    age:        26,


    fullname: function (){
        console.log(this.firstName+" "+ this.lastName)
    }
}

person1.age=35;// this is propertie change......

console.log(person1.age);// this is properties axcess.
person1.fullname();// this is method axcess of a object...........




let person2={};
person2.name="vishwajeet kumar";// propertie add in object........
console.log(person2)
console.log(person2.name)

person2.sayhi=function(){// method add in the object.........
    console.log("hi this is method add in object");
}
person2.sayhi();



let person3=new Object();// this is another way to create object.........
person3.name="first name";
console.log(person3);
console.log(person3.name);



// still es5 using constructor funtion...........
// in constructor function name first later will capital ............
// in es6 constructor function is called class...

 function Person(first, last, a){
    this.firstName =first;
    this.lastName  =last;
    this.age =a
    this.address=function(){
        console.log("delhi india")
    }
    this.changeage=function(newage){// this is propertie change through method.......
        this.age=newage
    }
 };

 
 

 let personfirst=new Person("naveen","rautela",26);
 personfirst.changeage(35);// this is for change the value of object from out side.........
 console.log(personfirst);


 let personsecond=new Person("rahul","rautela",20);
 console.log(personsecond);


 let personthird=new Person("kamal","rautela",25);
 console.log(personthird);

 let personfourth=new Person("deepak","rautela",15);
 console.log(personfourth);

 // class in java script......

//  class human{
//     constructor(firstname, middlename, lastname, age, dob){
//         this.First_name=firstname;
//         this.Middle_name=middlename;
//         this.last_name=lastname;
//         this.age=age;
//         this.date_of_birth=dob;
//     };
//     fullname(){
//         console.log(this.First_name, this.Middle_name, this.last_name)
//     }
//  };

//  let date_of_birth= new Date;
//  console.log(date_of_birth);
//  let person_first=new human("Ram","Kumar","Singh",26,date_of_birth);
//  let person_second=new human("ajeet","Kumar","Singh",26,date_of_birth);

// console.log(person_first);
// person_second. fullname();

