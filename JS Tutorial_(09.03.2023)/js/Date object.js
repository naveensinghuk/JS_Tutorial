// // let x = new Date(year, month, day, hour, min, sec, mili_sec);// maximum 7 parameter can pass...............
// // let x=new Date(2022,02); // minimum year and one month mendetory..........


let x=new Date(2022,02,30,5,2,6,20);// this is as a parameter formet.....
// let y=new Date("october 13,2022 11:12:30");// this is as a string formet.....
// console.log(x);
// console.log(y);


console.log(x.getTime());// this is milisecond from 1 january 1970 to current.........
console.log(x.getFullYear());// get full year method use for geting current year......
console.log(`month = ${x.getMonth()}`);


let getday= function (){  // this is function for get days name .......
    switch(x.getDay()){
    case 0:
        console.log(`Today is = sunday`);break;
    case 1:
        console.log(`Today is = monday`);break;
    case 2:
        console.log(`Today is = tuesday`);break;
    case 3:
        console.log(`Today is = wednesday`);break;
    case 4:
        console.log(`Today is = thursday`);break;
    case 5:
        console.log(`Today is = friday`);break;
    case 6:
        console.log(`Today is = saturday`);break;

 }
};
getday();


 
let get_day=x.getDay();// this is if else if method for get the day name........
if(get_day==0){
    console.log("sunday");
}else if(get_day==1){
    console.log("monday");
}else if(get_day==2){
    console.log("tuesday");
}
else if(get_day==3){
    console.log("wed");
}
else if(get_day==4){
    console.log("thus");
}
else if(get_day==5){
    console.log("fri");
}
else if(get_day==6){
    console.log("sat");
};

let Getday=["sun","mon","tues","wed","thus","fri","sat"]// this is array method find the day.....
for(let i=0;i<= x.getDay();i++){
    if(i==x.getDay()){
        console.log(`today is = ${Getday[i]}`);
    }
    

}

console.log(`hour = ${x.getHours()}`);
console.log(`minute = ${x.getMinutes()}`);


// set function for change the value........
let y=new Date(2022,02,30,5,2,6,20);
y.setFullYear(2020);
y.setDate(01);
y.setHours(6);
y.setMinutes(30)
console.log(y);


// if we want after 50 days later which date will came gow to find?......
let z=new Date(2020,00,01,01,01,01,01);
z.setDate(z.getDate()+366)
console.log(z);


let m=new Date( 2022,02,30,5,2,6,20);
console.log(m);
let n=new Date(2023,09,20,5,5,6,20);
console.log(n)
n.setDate(m.getDate()+50)
console.log(n);

// how to compare date?
let first_date=new Date( 2022,02,30,5,2,6,20);
let second_date=new Date( 2022,02,30,5,2,6,20);
if(first_date>second_date){
    console.log("first date is greater then second date");
}else if(first_date<second_date){
console.log("second date is greater then first date")
}else{
    console.log("both date are same date")
};



