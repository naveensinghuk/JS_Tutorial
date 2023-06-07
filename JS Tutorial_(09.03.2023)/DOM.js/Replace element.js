let parent=document.getElementById("replace");
console.log(parent);
let item=document.createElement("li");

item.textContent="services";
let replace=parent.firstElementChild.nextElementSibling;// replace etem is target by the parent element......
parent.replaceChild(item,replace)// item is add the value, replace is position.........
