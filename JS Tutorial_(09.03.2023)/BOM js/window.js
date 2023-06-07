console.log(window.innerHeight);// this is innerheight for checking webpage inner height.......

console.log(window.innerWidth);// this is innerheight for checking webpage inner width.......

console.log(window.outerHeight);// this is for outer height for checking complete window height........
console.log(window.outerWidth);// this is for outer Width for checking complete window Width........

let button_1=document.getElementById("btn1");
let url= "www.google.com";
let feeture="height=500px, width=500px"


button_1.addEventListener('click', function (){
    window.open(url,'Google',feeture);// window open() is a method and there is thrre parammeter passed(url,name,feeture)
});

let win;
let button_2=document.getElementById("btn2");
let url1="www.facebook.com";
let feeture1="height=100px, width=200px,"
button_2.addEventListener('dblclick', function(){
    win=window.open(url1,"Google", feeture1);// win variable is aleady defined in globle scop..........
    // same name conditin open already same name window then new same name window will not open........
});

let button_3=document.getElementById("btn3");
button_3.addEventListener('click',function(){
    win.close();
})

