let insert=document.getElementById("insert_before");// parent element selected.....
console.log(insert);
let item=document.createElement("li");// this is create element..
item.textContent="new list"; // this is add text contenrt inside the created list...

let position1=insert.firstElementChild;// select postion where insert the new list.......
console.log(position1);
insert.insertBefore(item, position1);// two argument pass there first is created item and second is position.....
// insert.insertBefore(item, position1.nextElementSibling);// there is use nextElementSibling  for set in next position...........
// insert.insertBefore(item, position1.nextElementSibling.nextElementSibling);// there is use nextElementSibling  for set in next position...........
insert.insertBefore(item, position1.nextElementSibling.nextElementSibling.nextElementSibling);// there is use nextElementSibling  for set in next position...........

let body=document.body;// this is excess to body tag
console.log(body);
let item1=document.createElement("h2");// create element..
item1.textContent="this is new heading tag insdie the body tag";// add text content..
let list_1=document.getElementById("first_ul");// excess the element..
body.insertBefore(item1,list_1);// set the position.....











