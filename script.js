function myfunction()
{
    var x= document.getElementById("background").selectedIndex;
    var y = document.getElementById("body");
    var z = document.getElementById("h1");
     if(x==1){
         y.style.backgroundColor="blue";
        z.style.color="#f3f3f3";
    }
    else if(x==2){
        
         y.style.backgroundColor="red";
         z.style.color="#f3f3f3";  
    }

    else if(x==3){    
     y.style.backgroundColor="green";
     z.style.color="#f3f3f3"
   }
       else if(x==4){    
     y.style.backgroundColor="black";
     z.style.color="white"        
     }
}

// var inc = document.getElementById("increment");
// var h1 = document.getElementById("value1")
// count=0;
// inc.onclick= function(){
//     count+=1;
//     h1.innerText=count

// }
  count = 0;

 function increment()
 {
var counter = document.getElementById("value1")
  count += 1;
  counter.innerText=count;

};

function decrement() {
    var counter = document.getElementById("value1");
    if (count>0) {
        count -= 1;
        counter.innerText=count;    
    }
    
}
function reset() {
    var counter = document.getElementById("value1")
  
  counter.innerText=0;
    
}

function counter() {
    document.getElementById("counter-section").style.display="block";
    document.getElementById("voter-section").style.display="none";

    
}
function voter() {
    document.getElementById("voter-section").style.display="block";
    document.getElementById("counter-section").style.display="none";

    
}

var vote1 = 0;
var vote2 = 0;
var vote3 = 0;
var vote4 = 0;



function reactcount() {
    vote1 += 1;
    document.getElementById("react").innerText=vote1;
    
}
function vuecount() {
    vote2 += 1;
    document.getElementById("vue").innerText=vote2;
    
}function angularcount() {
    vote3 += 1;
    document.getElementById("angular").innerText=vote3;
    
}

function javacount() {
    vote4 += 1;
    document.getElementById("java").innerText=vote4;
    
}
