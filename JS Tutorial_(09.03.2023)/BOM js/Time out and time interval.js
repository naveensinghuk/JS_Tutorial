let timeout=setTimeout(myfunction, 5000);// this is settimeout method using for a tast perform given after set time . where myfunction is excution function name and 5000 is mili sec......
function myfunction(){
    alert("please subscribe....")
}
clearTimeout(timeout);// this is cleartimeout method using for set time will not excute........

// setinverval......
let settimeinterval = setInterval(fun,2000);// this function will repeate and excute every 2sec. 
function fun(){
    console.log("please subscribe....")
}
let clear_intrval=document.getElementById("clearinterval");
clear_intrval.addEventListener('click', function(){
    clearInterval(settimeinterval);// this is a button for stop interval set time ...........
})


