let x=document.getElementById("myinput");
x.addEventListener('focus', myfocusfun);// this is focuc eventlistner using for fosuc of user/ when user click in input box then will change the color...
x.addEventListener('blur', myblurfun);// this is blur eventlistner using for blur when user click outsite the input box........

function myfocusfun(){
    x.style.background="lightgreen";
};
function myblurfun(){
    x.style.background="white"
}

x.addEventListener('change', function(){// this is change eventlistner . when user move from the input box after type any text then text show in console.........
    console.log(this.value)

});

x.addEventListener('input', function(){// this is input eventlistner 
    console.log(this.value);
});
