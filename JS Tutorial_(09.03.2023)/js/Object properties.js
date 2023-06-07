//{} is define object.........object is non premitive data type....

let person={ // object properties........
    first_Name:      'naveen',
    middle_Name:     'singh',
    'last Name':       'rautela',
    age:              26,
    hieght:          '6 feet'
};
 // two way for excess to properties from object...
//  console.log(person.first_Name);// this is first way to excess....(dot notetion)


//  console.log(person['last Name']);// this is second way to axcess the properties..(array like notetion)......


// // properties value modify.......
// person.first_Name="roshan";
// console.log(person.first_Name);

// // add new propertie in object......
// person.state='uttarakhand';
// console.log(person);

//how to delete a properties from object.......
// delete person["last Name"];
// delete person.age;
// console.log(person);


// // how to check a propertie in object......(by in operator....)....
// console.log('hieght' in person);


// how to check all properties in object....... (this is also called for in loop...)
for(let key in person){// all object properties in  store in key object....
    // console.log(key);
    console.log(`${key} : ${person, key}`);  // this is for axcess to value of properties...

};










