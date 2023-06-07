
// this is normal object.......
// let student1={
//     firstname:"naveen",
//     lastname:"rautela",
//     age:26,
//     class:5
// }
// console.log(student1);


// // this is object cunstructor function.........
// // use for multiple object without creating object....
// function Student(first,last,age,cls){
//     this.firstName  =first;
//     this.lastName   =last;
//     this.age        =age;
//     this.class      =cls;
// };Student("naveen","rautela",26,5);
// // multiple students data can be created by a single object constructor function...........
// let student2=new Student("naveen","rautela",26,5);
// console.log(student2)
// let student3=new Student("kamal","singh",26,5);
// console.log(student2)
// let student4=new Student("rahul","kumar",26,5);
// console.log(student2)
// let student5=new Student("deepak","chandra",26,5);
// console.log(student2)



function Students(first,last,age,cls){
    this.firstName  =first;
    this.lastName   =last;
    this.age        =age;
    this.class      =cls;
    this.name       =function(){
        return this.firstName + " " + this.lastName
    }
}Students("naveen","rautela",26,5);

let student0=new Students("naveen","rautela",26,5);
student0.nationality="indian";// can be add a new properties in particuler object like this but its only for particuler object properties......
console.log(student0)


student0.name=function(){  // can be add a new method in particuler object like this but its only for particuler object properties.....
    return this.firstName + " " + this.lastName;
}
console.log(student0.name());
console.log(student0)






