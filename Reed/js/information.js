var btn=document.querySelector(".btn");
var menu=document.querySelector("#menu");
btn.addEventListener("click",event=>{
    btn.classList.toggle("rotateBtn");
    menu.classList.toggle("showMenu");
})