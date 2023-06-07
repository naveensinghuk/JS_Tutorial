let qry=document.querySelector("p.intro");// this query selector selector only first true condition ..
// where p is paragrsph.... and intro is class name.....
console.log(qry);
qry.innerHTML="hello this is query tag change by java script....";

let allqry=document.querySelectorAll("p.intro");
console.log(allqry);
len=allqry.length;
console.log(len);
for(let i=0;i<=len;i++){
    allqry[i].innerHTML=("hello this is all query selector all change by java script......");
};

