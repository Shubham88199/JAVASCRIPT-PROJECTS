let text1=document.getElementById("text");

text1.addEventListener('input',function(){
    let txtvalue=this.value; 
    let char=txtvalue.length;

    document.getElementById("char").innerHTML=char;
    txtvalue=txtvalue.trim();
    
    let wordarray=txtvalue.split(' ');
    let cleanarr=wordarray.filter(function (elm){
        return elm != "";
    });
   document.getElementById("word").innerHTML=cleanarr.length;
});

