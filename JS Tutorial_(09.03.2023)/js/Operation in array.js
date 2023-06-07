// let book=["math","english","hindi","bio"];

// book.push("science");// push function for add element after last element in array........
// console.log(book);
// console.log(book.length);

// let book=["math","english","hindi","bio"];
// book.unshift("computer");// unshift function use for add element before first element is array........
// console.log(book);

// let book=["math","english","hindi","bio"];
// book.pop();//pop function remove last element in array...
// book.pop();//multiple pop function use for remove last element in array...
// console.log(book);

// let book=["math","english","hindi","bio"];
// book.shift(book);// shift function use for remove element from begning .......
// book.shift(book);// multiple shift function use for remove element from begning .......
// console.log(book);

// let book=["math","english","hindi","bio"];
// book.splice(2,1);// this is splice method for remove particuler element with given quantity......
//                     //(2,1) where 2 is location and 1 is number of quantity for removing.... 
// console.log(book);


// let book=["math","english","hindi","bio"];
// // book =[];// this empty square box use for complete array empty.....
// book.length=0;// this is second method for array empty........
// console.log(book);


// let book =["math","english","hindi","bio"];
// let position =book.indexOf("bio");// .indexof use for finding location of array.........
// console.log(position);


// let book =["math","english","hindi","bio"];
// let book="hindi";
// console.log(Array.isArray(book));// Array.isArray function checking given elemnt is array or not..........

// let text="this is random text";
// let wordarray=text.split(' ');// split function use for text saperation in single single words......
// console.log(wordarray);

// let text="this is random text";
// let wordarray=text.split('s');// split function use for text saperation in single single words......
// console.log(wordarray);  // and aslo remove 's' from text and split from 's'...........

// let book=["this","is","me","and","my","name","is","naveen"];
// let joint=book.join(' ');// join method use for joint the array element............
// console.log(joint); 

// let book=["this","is","me","and","my","name","is","naveen"];
// let joint=book.join('_');// join method use for joint the array element............
// console.log(joint) 

// let book1=["math","english","hindi","bio"];
// let book2=["computer","science","gk","envirnment"];
// let book3=["games","excersise"];
// let newbook=book1.concat(book2,book3);// concat method use for add two arrays......
// console.log(newbook);


// let book1=["math","english","hindi","bio"];
// let bookwithpages=[
//     ["math","300"],
//     ["physics","250"],
//     ["hindi","253"],
//     ["hindi","500"]
// ];// this is inside the array again a array....
// // let fetch=bookwithpages[1][0];// fetching the element and excess the correct element....
// let fetch=bookwithpages[1];// fetching the element by location and print it....
// console.log(fetch);



// let book1=["math","english","hindi","bio"];
// let bookslength=book1.length;
// for(let i=0;i<bookslength;i++){
//     console.log(`element ${i} is ${book1[i]}`);// this is for loop for axcess all element.....
// }                           // there is also use template litral for axcess the value of array.......


let book=["math","english","hindi","bio"];
book.forEach(myfun);// this is forEach function use for array element excess. pass a function .......
function myfun(value){
    console.log(value);
}







