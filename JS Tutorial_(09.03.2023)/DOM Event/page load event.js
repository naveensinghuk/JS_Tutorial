window.addEventListener('DOMContentLoaded', function(){
    console.log("DOM tree created.")// this is load first
});

window.addEventListener('load', function(){
    console.log("fully loaded")// after all external elements loaded then  this ielement will load............
})

let loaded=document.getElementById("img1");
loaded.addEventListener('load', function(){
    console.log("after image loaded then it will be load.....")
});