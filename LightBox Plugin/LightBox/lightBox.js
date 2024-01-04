



//popup html is added by this function.
function popupjs(){

    let html = '<div id="popup"><span id="close" onclick="closepopup()"><img id="close-img" src="LightBox/image/cancel.png" alt=""></span><img id="left-arrow" onclick="previmg()" src="LightBox/image/left.png" alt=""><img id="right-arrow" onclick="nxtimg()" src="LightBox/image/right.png" alt=""><img id="main-image" src="/img1.bmp" alt=""></div>';


   let popupdiv= document.createElement('div');
   popupdiv.innerHTML=html;

   document.body.insertBefore(popupdiv,document.body.firstChild);
   
}




let img;
let current;
// function to intialise.
function init(target){
   
     img=document.getElementsByClassName(target);
     for(let i=0;i<img.length;i++)
     {

        img[i].style.cursor="pointer";

        img[i].addEventListener('click',function(){
            document.getElementById("main-image").src=this.src;
            document.getElementById("popup").style.display="block";
            checkarrow();
        });
     }
    
     popupjs();
      
        
    
}


function closepopup(){
    document.getElementById("main-image").src="";
    document.getElementById("popup").style.display="none";
}

//next
function nxtimg(){
    getcurrent();
current++;
document.getElementById("main-image").src= img[current].src;
checkarrow();
}

//previousimg
function previmg(){
    getcurrent();
    current--;
  document.getElementById("main-image").src=img[current].src;
  checkarrow();
    }


function getcurrent(){

    for(let j=0;j<img.length;j++)
    {
       
        if(img[j].src== document.getElementById("main-image").src)
        {
            current=j;
        }
    }
   
}

function checkarrow(){
    getcurrent();
    if(img.length==1)
    {
        document.getElementById("left-arrow").style.display="none";
        document.getElementById("right-arrow").style.display="none";
    }
    else if(current=='0')
    {
        document.getElementById("left-arrow").style.display="none";
        document.getElementById("right-arrow").style.display="block";
    }
    else if(current== img.length-1)
    {
        document.getElementById("left-arrow").style.display="block";
        document.getElementById("right-arrow").style.display="none";
    }
    else
    {
        document.getElementById("left-arrow").style.display="block";
        document.getElementById("right-arrow").style.display="block";
    }
}
