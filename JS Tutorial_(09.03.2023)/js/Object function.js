// let person={
//     first_Name:"naveen",
//     middle_Name:"singh",
//     last_Name:"rautela"

// };
// console.log(person);
// person.age=25;
// console.log(person)

// person.sayhello=function(){// this is anonymous function where is sayhello is method.......
//     console.log("hello world");

// };
// person.sayhello();

// function greet(){ // this is second way to object in function........
//     console.log("hello world")
// };

// person.sayhello=greet;
// person.sayhello();


// now this is third way to function in object and function define in the object..........

// let person={
//     first_Name:"naveen",
//     middle_Name:"singh",
//     last_Name:"rautela",
//     sayhello:function(){
//         console.log("hello world");
//     }
// };
// person.sayhello();
// console.log(person.first_Name);


// this is fourth way to object in function this method use after ES-6 without using function keyword........
let person={
        first_Name:"naveen",
        middle_Name:"singh",
        last_Name:"rautela",
        sayhello (){
            console.log("hello world");
        }
    };
    person.sayhello();






