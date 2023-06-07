let elm=document.getElementById("head");// select for chile components.........
console.log(elm);// eml for child element....
elm.innerHTML="after change first child list by java script....";
// traverse means move one elements to another elements with help of traverse element......
let prt=elm.parentElement;
console.log(prt);// prt for parent element........
prt.innerHTML=" after change from java script first parent component.....";// html text change from java script......

// now child element select by parent element....
let elm2=document.getElementById("second_list");
console.log(elm2);// this is parent element......
let chld1=elm2.firstElementChild; // select will first element of child list.......
console.log(chld1);


let chld2=elm2.children;// there is select all child elements by parent element..........
console.log(chld2);
let len=chld2.length;
console.log(len);
// for(let i=0;i<=len;i++){
//     chld2[i].innerHTML="change list";
// };

// sibling.a element near by two elements previous and next elements for this element that is called sibling....
let sbl=document.getElementById("siblng");
console.log(sbl);
let prv=sbl.previousElementSibling;// this is previous sibling for before the element...........
console.log(prv);

let nxt=sbl.nextElementSibling;// this is next sibling for next the element...........
console.log(nxt);









