let list=document.getElementById("menu");// this is parent element.........
console.log(list);
// let elm=list.firstElementChild;// this is axcess for first child element......
let elm=list.firstElementChild.nextElementSibling;// this is axcess for nex child element......
console.log(elm);
list.removeChild(elm);// this is remove method use for removing selected element.......

let body=document.body;// axcess to parent element.....
console.log(body);
body.removeChild(list);// excess the parent element and then remove the all child element.........
