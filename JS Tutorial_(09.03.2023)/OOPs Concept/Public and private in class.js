class emp{
    #name="";
    constructor(n){
        this.#name=n;// this is private propertie... private propertie can not call out side the class it will be call in side the class by another method or properties........
    };
    #getname(){// this is private method can not use out side the class........
        console.log(this.#name)
    }
    public(){// this is normal method for using call to private method.............
        this.#getname();// there is calling to private method..........
    }
};

let emp1=new emp("naveen");
emp1.public()