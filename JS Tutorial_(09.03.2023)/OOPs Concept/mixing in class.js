// Mixing.
let useful={// this is a normal object......
    sayhi(){
        console.log("hi......");
    },
    saybye(){
        console.log("bye......");
    }
};

class user{
    constructor(){
        this.name="naveen";
    }
};

Object.assign(user.prototype, useful)// this is mixin sentence of object and class.
let usr=new user();
console.log(usr.saybye());


class admin extends user{

};
let admin1=new admin();
console.log(admin1.sayhi());
console.log(admin1);