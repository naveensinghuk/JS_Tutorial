let content=document.getElementById("remve");
console.log(content);


function click1(){
    alert("click_1");
};
function click_2(){
    alert("click_2");
}
content.addEventListener("click", click1);
content.addEventListener("click",click_2);

content.removeEventListener("click",click1);