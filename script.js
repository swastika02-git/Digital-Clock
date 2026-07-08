let clock = document.getElementById("clock");
let period;
function updateClock(){
    let currentTime=new Date();
    let hours = currentTime.getHours();
    if(hours>=12){
    period="PM";
      }
     else{
    period="AM";
       }
    if(hours>12)
    {
        hours=hours-12;
    }
    if(hours==0)
    {
        hours=12;
    }
    hours=check(hours);
    let minutes = currentTime.getMinutes();
    minutes=check(minutes);
    let seconds = currentTime.getSeconds();
    seconds=check(seconds);

    clock.textContent=hours+":"+minutes+":"+seconds+" "+period;
}    
updateClock();
setInterval(updateClock,1000);
/*setInterval(function(){
    updateClock();
},1000);*/
function check(k){
    if(k<10){
        k="0"+k;
    }
    return k;
}
