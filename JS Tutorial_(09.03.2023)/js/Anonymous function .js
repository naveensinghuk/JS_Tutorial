// anonymous function can asign in a variable.......
// function expression a function which is define by a variale that is call function expression ...........
// anonymous function  use less memory and same time and storage.......

let show = function (){
console.log("hello world");

};
show();// this is call by variable.................
setTimeout(show,6000);// this is setTime function use for output excute after a given time period.........

// setTimeout(function (){
//     console.log("hello world");
    
//     },6000)// this is derect paste anonymous function code and output show after time period.....


let namefun=function (){
let first=prompt("enter the first value");
let fvalue=parseInt(first);
console.log(typeof first)
let second=prompt("enter the second value");
let svalue=parseInt(second);
let result=fvalue+svalue;
console.log(result);
};namefun();







