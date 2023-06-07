let menu=document.getElementById("clone");
console.log(menu);

// let cloneElm=menu.cloneNode();// without true copy only url...
let cloneElm=menu.cloneNode(true);// with true copy all child element....
console.log(cloneElm);
cloneElm.id="mobilevalue"// this is for change Id.......

let main=document.body;
main.appendChild(cloneElm);
