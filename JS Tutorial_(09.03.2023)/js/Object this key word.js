// this keyword use for accesses the same properties in same object .........

let person={
name:"naveen",
sirName:"rautela",
age:26,
sayhello(){
 
    console.log(`hello i am ${this.name} and i have a ${car.brand} car`)// there is used template litrals
    console.log("hello i am " + this.name +" i have a "+ car.brand + "car") // this is normal way without template litrals.....
    
}
};
 


let car={
    brand:"tata",
    model:"nexon"
    
    };
person.sayhello()



