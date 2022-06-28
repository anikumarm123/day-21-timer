
var firstTimer=document.getElementById("timer-1");

var startbutton=document.getElementById("s-button");

var secondtimer=document.getElementById("timer-2"); 

var swapbutton =document.getElementById("swp-button");

var resetbutton = document.getElementById("R-button");

startbutton.addEventListener("click",TimerFun);
swapbutton.addEventListener("click",swap_1);
resetbutton.addEventListener("click",Reset)

var flag = true;
var mi =4;
var sec =60; 
var mi_1 =4;
var sec_1 =60; 

 function TimerFun(){

 stop1 = setInterval(start,1000);
 flag = false;

 }

 function start (){ 
  sec--;
  if(sec < 0 ){
    mi--;
  if(mi >= 0){
    
     sec = 60;
  } 
  }
    firstTimer.innerHTML = "0"+mi+" : " +sec;
  if(sec < 10){
    firstTimer.innerHTML ="0"+mi+" : "+"0"+sec;
  }
  
    if(sec == 0 && mi == 0){
      clearInterval(stop1);
  }  
startbutton.disabled = true
}

function swap_1(){
  if(flag == false){
  clearInterval(stop1);
  stop2 = setInterval(Swap,1000);
  flag = true;
}
else{
  clearInterval(stop2);
  TimerFun();
}
}
function Swap(){
  sec_1--;
  if(sec_1 < 0 ){
    mi_1--;
  if(mi_1 >= 0){
    
     sec_1 = 60;
  } 
  }
    secondtimer.innerHTML ='0' +mi_1+" : " +sec_1;
    if(sec < 10){
      firstTimer.innerHTML ="0"+mi_1+" : "+"0"+sec_1;
    }
    if(sec_1 == 0 && mi_1 == 0){
      clearInterval(stop2)
  }  
}

function Reset(){
  firstTimer.innerHTML = "0"+5 +" : "+"0"+0;
  secondtimer.innerHTML = "0"+5 +" : "+"0"+0;
  clearInterval(stop1);
  clearInterval(stop2);
  startbutton.disabled=false;
}