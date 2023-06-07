window.addEventListener('scroll',scrol );// this is for checking when webpage is scrolling then it will be count.......

function scrol(event1){
    console.log("scrolling")
}


window.addEventListener('wheel',scrol_direction);// this is wheel scrolling check in which direction up or down........

function scrol_direction(event){
    if(event.deltaY< 0){// deltay for using vertical scrolling.........
        console.log("scrolling up......")
    }else if(event.deltaY > 0){
        console.log("scrolling down.........")
    }
}


// this is scrolling check in x-axix..............
window.addEventListener('wheel',function (event2){
    if(event2.deltaX<0){
        console.log("scrolling left");
    }else if(event2.deltaX >0){
        console.log("scrolling right")
    }
});


// scrolling count in pixel........

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 500){// if scrolling greaget then 500px in y-axix then color will change............
        document.body.style.backgroundColor="blue";// this is inline css....
    }else if(window.pageYOffset > 150){
        document.body.style.backgroundColor="yellow";
    }
});


