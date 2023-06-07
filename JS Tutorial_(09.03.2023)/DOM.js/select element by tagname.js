// let tagname =document.getElementsByTagName("h1");// heading by tagname

// console.log(tagname[0]);
// tagname[0].innerHTML="hello heading";


// let len=tagname.length;
// console.log(len);
// for(let i=1;i<=len;i++){
//     tagname[i].innerHTML = "hello";
// };


// let tagname_para=document.getElementsByTagName("p");// paragraph by tagname.......
// console.log(tagname_para);
// let len=tagname_para.length;
// console.log(len);
// console.log(tagname_para[0])
// tagname_para[0].innerHTML="hello paragraph";

// select only the heading tag inside the <div>........

let div1=document.getElementById("div1");
console.log(div1);
let head=div1.getElementsByTagName("h1");
console.log(head.length);
for(let i=0;i<=head.length;i++){
    head[i].innerHTML="hello change after div"
}

