let parent=document.getElementById("adjacent");
console.log(parent);

let html="<h1>new beforebegin<h1>"
let html1="<h1>new afterbegin<h1>"
let html2="<h1>new beforend<h1>"
let html3="<h1>new afterend<h1>"
parent.insertAdjacentHTML('beforebegin',  html)
parent.insertAdjacentHTML('afterbegin',  html1)
parent.insertAdjacentHTML('beforeend',  html2)
parent.insertAdjacentHTML('afterend',  html3)







