const key="FMNfhDH3mxv5ndIWC2LpOPv4pWZg4CXv1vslI623doA";

const form=document.querySelector('form');
const input=document.getElementById('Search-input');
const showmore=document.getElementById('show-more');
const div_main=document.getElementById('Search-results');


let inputval="";
let page=1;

async function Search(){

    inputval=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputval}&client_id=${key}`;

    const response=await fetch(url);
    const data=await response.json();
    const result=data.results;
    if(page===1)
    {
        div_main.innerHTML="";
    }
   
    result.map((index)=>{
       const wrapper=document.createElement('div');
       wrapper.classList.add("search-result");
       const image=document.createElement('img');
       image.src=index.urls.small;
       image.alt=index.alt_description;
       const imagelink=document.createElement('a');
       imagelink.href=index.links.html;
       imagelink.target="_blank";
       imagelink.textContent=index.alt_description;

       wrapper.appendChild(image);
       wrapper.appendChild(imagelink);
       div_main.appendChild(wrapper);
    })

    page++;

    if(page>1)
    {
        showmore.style.display="block";
    }
}

form.addEventListener("submit",(event)=>{
        event.preventDefault();
        page=1;
        Search();
});

showmore.addEventListener("click", ()=>{
    Search();
});
