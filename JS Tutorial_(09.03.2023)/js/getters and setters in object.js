let person={
    name:"naveen",
    age:26,
    getname:function(){
        return(this.name.toUpperCase())
    }
}
console.log(person.name);// this is propertie access....
console.log(person.getname());// this is function/method access........


// getter and setter function both are use for manupulate the properties value in object..............
let person1={
    name:"naveen",
    age:26,
    get getname(){ // this is getter function........
        return(this.name.toUpperCase())
    }
}
console.log(person1.getname)// now this call as properties.....



let person2={
    name:"naveen",
    age:26,
    set setname(n){ // this is setter function 
        this.name=n.toUpperCase();
    }
}
person2.setname="nirmal";
console.log(person2)// now this call as properties.....




