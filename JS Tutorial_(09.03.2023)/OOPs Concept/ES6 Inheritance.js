// Afater ES6 inheritance in java script..........

class employee{
    constructor(firstn){
        this.firstname=firstn;
       
    };
    msg(){
        console.log("hi....this is called by super function ...");
    }
};


class manager extends employee{
    constructor(n,d){
        super(n); // this is super function  for call to parent class properties....where n is a parameter which value pass from parent propertie to child ..........
        this.department=d;
    };
    msg(){
        console.log("hi.......");
    }
    inf(){
        this.msg();// this is for another method calling inside the same class...........
        super.msg();// this is mehtod excess to parent class...........
        console.log(this.firstname + " is manager of department"+" "+this.department)
    }

};

let managerfirst=new manager ("naveen", "web development");
managerfirst.inf();
console.log(managerfirst);



// this is another class and inherite to first child class..
class admin extends manager{// there is inherite two class by a single class........
    ad(){
        super.msg();
    }

};
let admin1=new admin("third class name","production");
console.log(admin1);
admin1.ad();