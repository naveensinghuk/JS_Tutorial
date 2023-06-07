// in ES6 class replace to constructor function......
// class person{
//     constructor(){// this is object propertie.......
//         console.log("person created......")
//     };
//     fullname(){
//         console.log("hi this is method.....")
//     }
// };
// let person1=new person();
// let person2=new person();// when created new object then automatically call to constructor function............
// console.log(person1);
// person1.fullname();
//
//
//
//

// class person{
//     constructor(first,middle,a,id){
//         this.firstname=first;
//         this.middlename=middle;
//         this.age=a;
//         this.info=id;
//     };
   
// };
// let person1=new person("naveen","rautela", 27,"123456");
// console.log(person1);
// person.prototype.fullname=function(){// this is before es6 process to add method.......
//     console.log((this.firstname +" "+ this.middlename))
// };
// person1.fullname();

// class man extends person{// there is inherite person class (parent class) by man class (child class);

// }

// let man1=new man("rahul","kumar",25,32144);
// console.log(man1.fullname());






// compression between before es6 and after es6.......how to method connect with prototype.....


// function Man(){// this is before es6 method add......
//     this.fullname=function(){ // this is before es6 method add process there will not directly add to prototype......
//     console.log("my name is naveen singh")
//     }
// };
// let man1=new Man();
// Man.prototype.fullname=
// console.log(man1)
// man1.fullname();




// class person{// this is es6 method add process. and method add directly to prototype........
//     full_name(){
//         console.log("naveen singh")
//     }
// }
// let person1=new person();
// console.log(person1);


// inheritance of two classes........



class person{// this is first class..........
    constructor(first, last, a){// this is first way to add method is class........
        this.firstname=first;
        this.lastname=last;
        this.age=a;
    };
    fulldetails(p){ // this is second way to add method is class........
        console.log("my name is "+this.firstname+" "+ this.lastname+" "+ "and my age is "+this.age +" " + " i am from - " + p)
    }
    static hello(){// this is thirst way to add method is class........
        console.log("hello");
    }

    static static_propertie=console.log("somthing");
}

let person1=new person("naveen", "singh", 25);
console.log(person1);
person1.fulldetails("pithoragarh");
person.hello();// this is static method calling process it's always calling through class name........
person.static_propertie; // this is static propertie calling always by class name.........







class man extends person{// this is second class and there is inheritance to person class....
   
};


let man_first=new man("kamal","kumar",25);
console.log(man_first);
man_first.fulldetails("haldwani");

