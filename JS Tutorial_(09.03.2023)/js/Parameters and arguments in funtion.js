
// let value=prompt("enter the value ");// enter the value and find the table.......
// let newvalue=Number(value);
// console.log(typeof newvalue)

// function Table(newvalue){1   

// for(let i=1;i<=10;i++){
   
//     document.write(`${newvalue} * ${i} = ${i*newvalue}`);
//     document.write("<br>");
// }
// }Table(newvalue);



// two number addition........

let first=prompt("enter the first value");
let num1=Number(first);
let second=prompt("enter the second value");
let num2=Number(second);

function add(num1,num2){// both num1 and num2 are called by parameter........
    
    document.write(`${num1}+${num2}=${num1+num2}`);
}
add(num1,num2);// these num1 and num2 are calling by argument....