let link=document.getElementById("link_disable");
link.addEventListener('click', function(e){
    console.log("link clicked");
    e.preventDefault();// this is preventDefault method using for break default behaviour of java script . and there is break the link in click event.......
});

// let submit=document.getElementById("submt");// this is for confirm to user.......
// submit.addEventListener('click',function(){
//     confirm("are you sure !");
// });


let submit1=document.getElementById("submt");
submit1.addEventListener('click',function (event){
    console.log("clicked submit")
    event.preventDefault();// this for break submit button default behavoir
    
})

let submit12=document.getElementById("submt");
submit12.addEventListener('dblclick',function (event){
    console.log("duble clicked submit")
    event.preventDefault();// this for break submit button default behavoir
    
})

