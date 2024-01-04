
let input=document.getElementById("input");
const btn=document.getElementById("btn");



btn.addEventListener('click',function (){
    
    if(!input.value)
    {

       return;
    }
    let main2=document.getElementById("main2");
    main2.innerHTML +=`<div id="qr"><img id="qr-code" src="" alt=""></div>`;
    let qr=document.getElementById("qr-code");
    btn.innerText = "Generating QR code...";
    qr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    qr.addEventListener('load',()=>{
        btn.innerText = "Generate QR code";
    });
});


