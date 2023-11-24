const switchBox=document.querySelector(".switch");

const icon=document.querySelector("i");

const container=document.querySelector(".container");
const btn=document.querySelector('.btn');
const title=document.querySelector("h1");

switchBox.addEventListener("click", function(){
    icon.classList.toggle("fa-sun");
    btn.classList.toggle("moveBtn");
    icon.classList.toggle("icon-change");
    switchBox.classList.toggle("switch-change");
    container.classList.toggle("container-change");
    if(title.innerHTML==="DARK MODE"){
        title.innerHTML="LIGHT MODE";
    }
    else{
        title.innerHTML="DARK MODE";
    }

});