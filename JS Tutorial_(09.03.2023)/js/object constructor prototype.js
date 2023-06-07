// function Student(first,last,age,cls){
// this.firstName  =first;
// this.lastName   =last;
// this.age        =age;
// this.class      =cls;
// }
// let student1=new Student("Naveen","Rautela",26,6);
// let student2=new Student("Rahul","kumar",26,6);
// let student3=new Student("Ram","Rautela",26,6);
//  student1.nationality="insian";// add properties for a particuler object....
 


//  // protype object use for add properties in the object construction function......
// Student.prototype.subcontinent="asian";// this is properties add in object construction function...


//  Student.prototype.name=function(){ // this is method add in object consrtruction funtion ....
//     return this.firstName + " " + this.lastName;
// }


// console.log(student1.subcontinent);
// console.log(student2.name());
// console.log(student3);

function Constrctfun(firstName,middleName,lastName, age,mobileNumber,empID){
    this.first  = firstName;
    this.second = middleName;
    this.last   = lastName;
    this.age    =age;
    this.contact   =mobileNumber;
    this.id     =empID;

    this.sayhi =function (){
        console.log("hi naveen");
    }

};
;
let person1=new Constrctfun("naveen","singh","rautela",26,12345645749,56);
let person2=new Constrctfun("deepu","singh","rautela",26,12345645749,56);
console.log(person1.last);
console.log(person2);









