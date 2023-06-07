function buttonclick(){
    alert("button clicked")
};

let button = document.getElementById("btn1");
button.addEventListener("click", buttonclick)// this is addeventListner using for add event listner where two paramenter will be pass first is event and second is function......


// this is also click event but created by annonymouse function.......
let button2=document.getElementById("btn2");
button2.addEventListener("click", function(){
    alert("this is annonymous function created and button is clicked")
})

// this is for multiple eventListner add.........
let clck=function(){
    console.log("button is clicked!")
}

let button3=document.getElementById("multiple_event");
button3.addEventListener("click",clck);

let mouseover=function(){
    console.log("this is mouse over");
}
let button3a=document.getElementById("multiple_event");
button3a.addEventListener("mouseover", mouseover);

let mousoutover=function(){
    console.log("this is mouse out over");
}
let button3b=document.getElementById("multiple_event");
button3a.addEventListener("mouseout", mousoutover);

