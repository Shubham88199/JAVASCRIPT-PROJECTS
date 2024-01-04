let cel=document.getElementById("cel");
let fah=document.getElementById("fah");


cel.addEventListener("input",function(){
 let celin=(cel.value*9/5)+32;
 fah.value=parseFloat(celin.toFixed(4));
});

fah.addEventListener("input",function(){
let fahin=(fah.value-32)*5/9;;
cel.value=parseFloat(fahin.toFixed(4));
});