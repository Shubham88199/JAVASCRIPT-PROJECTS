let form=document.getElementById("form");
let user=document.getElementById("user");
let pass=document.getElementById("pass");
let flag=1;
form.addEventListener('submit',error);

function error(e){
    if(user.value=="")
    {
        document.getElementById("usererror").innerHTML="user name required";
      
       e.preventDefault();
    }
    else if(user.value.length<5){
        document.getElementById("usererror").innerHTML="user name has minimun 5 character";
       
        e.preventDefault();
    }
    else{
        document.getElementById("usererror").innerHTML=""; 
    }

     if(pass.value=="")
    {
        document.getElementById("passerror").innerHTML="password does not empty"; 
        
        e.preventDefault();
    }
    else{
        document.getElementById("passerror").innerHTML="";
    }       
};