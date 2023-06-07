let input=2;
// if(input===1){
//     document.write("continue..")
// }else if(input=== "y"){
//     document.write("continue..")
// }else if(input === "yes"){
//     document.write("continue..")
// }else if(input===0){
//     document.write("End..")
// }else if(input==="n"){
//     document.write("End..")
// }else if (input ==="no"){
//     document.write("End..")
// }else{
//     document.write("wrong input")
// }
switch(input)// this is switch statement..
{ 
    case 1:
        document.write("first continue..");
        break;
    case 2:
        document.write("second continue..");
        break;
    case 3:
        document.write("third continue..");
        break;
    case -1:
        document.write("first not continue..");
        break;
    case -2:
        document.write("second not continue..");
        break;
    case -3:
        document.write("third not continue..");
        break;
    default:
        document.write("wrong input");
    
}
// this is also switch statement for short method...
// switch(input){ 
//     case 1:
//     case 2:
//     case 3:
//         document.write("continue");
//         break;
//     case -1:
//     case -2:
//     case -3:
//         document.write("end");
//         break;
//     default :
//     document.write("wrogn input")
// }