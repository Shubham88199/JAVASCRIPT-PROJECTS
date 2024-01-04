
let flag =false;

let hr=0;
let min=0;
let sec=0;
let milisec=0;

function start(){
    flag=true;
stopwatch();
};

function stop(){
flag=false;
};

function reset(){
    
flag=false;
hr=0;
min=0;
sec=0;
milisec=0;

document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("milisec").innerHTML="00";
};

function stopwatch(){
if(flag==true)
{
    if(milisec==100)
    {
        sec=sec+1;
        milisec=0;
    };
    if(sec==60)
    {
        min=min+1;
        sec=0;
    };
    if(min==60)
    {
        hr=hr+1;
        min=0;
        sec=0;
    };
 
    let hrstr=hr;
    let minstr=min;
    let secstr=sec;
    let milisecstr=milisec;
    
    if(hr<10){
        hrstr="0"+hrstr;
    };
    if(min<10){
        minstr="0"+minstr;
    };
    if(sec<10){
        secstr="0"+secstr;
    };
    if(milisec<10){
        milisecstr="0"+milisecstr;  
    };
   

    milisec=milisec+1;
    document.getElementById("hr").innerHTML=hrstr;
    document.getElementById("min").innerHTML=minstr;
    document.getElementById("sec").innerHTML=secstr;
    document.getElementById("milisec").innerHTML=milisecstr;


    setTimeout("stopwatch()",10);
};
};