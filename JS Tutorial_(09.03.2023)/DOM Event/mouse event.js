function onclick_fun(){
    alert("left click event")
};
function rightclick(){
    alert("right click event")
}
function duble_click(){
    alert("duble click event")
}
function mousedown_event(){
    console.log("Mouse down event")
}
function mouseup_event(){
    console.log("Mouse up event")
}

let box=document.getElementById("script");
box.addEventListener("click", onclick_fun);// this is for left side mouse click.....
box.addEventListener("contextmenu", rightclick);// this is for right click event of mouse............

box.addEventListener("dblclick", duble_click )// this duble click evetnt..........
box.addEventListener("mousedown", mousedown_event )// this duble click evetnt..........
box.addEventListener("mouseup", mouseup_event )// this duble click evetnt..........
