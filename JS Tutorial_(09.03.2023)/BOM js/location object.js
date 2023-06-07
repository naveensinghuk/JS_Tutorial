// these are properties.....
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);


// these are method.......
function myfun(){
    window.location="googgle.com";// this is first way to redirect google home page.
};
function myfun1(){
    location.href="google.com";// this is second way to redirect to yahoo page......
};

function myfun2(){
    location.assign("facebook.com");// this is third way to redirect to facebook................
};
function myfun3(){
    location.replace("google.com");//this is also a method for redirect but it will not save the history........
};
function myfun4(){
    location.reload;//this is use for reload the page............
};