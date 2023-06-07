
function addition(){

console.log(`length of argument = ${arguments.length}`);
if(arguments.length==0){
    console.log("no arguments has passed !")
}else{
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum = sum + arguments [i];
    }console.log(sum);
}

}
let add=addition;// this is function store in the variable............
add(2,5,4,6);// can use also like a function.........

addition(1,2,3,);





