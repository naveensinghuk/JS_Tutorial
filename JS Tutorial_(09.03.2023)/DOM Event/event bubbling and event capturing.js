let parent1=document.body;
let child_1=document.getElementById("child_1");
let child_2=document.getElementById("child_2");

// this is without bydefault capture using (false used) thats way first chil_1 and then child_2 and then after parent excute.............
parent1.addEventListener('click', parentfun);// this is without use capture........
function parentfun(){
    console.log("this is body")
};
child_1.addEventListener('click', child_1fun);// this is without use capture........
function child_1fun(){
    console.log("this is child_1")
};

child_2.addEventListener('click',child_2fun);// this is without use capture........
function child_2fun(event){
    console.log("this is child 2")
    event.stopPropagation();// this is stopPropagation function using if we want want when click on button then click only on button not other sequence follow.......
}


// now using capture (true) there will first parent excute and then sequencly inner element excute....
parent1.addEventListener('click', parentfun,true);// this is use capture........
function parentfun(){
    console.log("this is body")
};
child_1.addEventListener('click', child_1fun,true);// this is use capture........
function child_1fun(){
    console.log("this is child_1")
};
child_2.addEventListener('click',child_2fun,true);// this is use capture........
function child_2fun(){
    console.log("this is child 2")
}