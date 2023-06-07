// function add(a,b){
//     let c=a+b;
//     return c; // this is return method function always return value will defined  on return.....
//     return a; // this return will not work alwasy first return will give the return value....
// }
// let c=add(12,8);
// console.log(c);

// two numbers compression.....for multiple return conditions.....
function compare(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return -1;
    }
    else if(a=b){
        return 0;
    }
}

let c=compare(5,5);
document.write(c);


