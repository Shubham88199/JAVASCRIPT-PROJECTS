const int=document.getElementById("int");
const item=document.getElementById("ul-box");

int.addEventListener('keyup',function (event){
 if(int.value!="" && event.key=="Enter")
 {
  add(int.value);
  int.value="";
 }
});

function add(text){ 
    const newitem=document.createElement("li");
  newitem.innerHTML=`
  ${text}
  <i>&#x274C;</i>
  `;
  newitem.querySelector("i").addEventListener('click',function (){
    newitem.remove();
});
  item.appendChild(newitem);
}

