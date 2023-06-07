let elm=document.getElementsByClassName("list2");
console.log(elm[0],elm[1]);// multiple class saleciton output sould be like array and then acess like array.......
// console.log(elm[0],[1].innerHTML);
elm[0].innerHTML="this is hello key word";
elm[1].innerHTML="this is hello key word";

console.log(`lenght of class name = ${elm.length}`);
let len=elm.length;
for(let i=0;i<=len;i++){
    elm[i].innerHTML="hello world";
  
};





