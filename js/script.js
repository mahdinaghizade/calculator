let w=document.getElementById("width");
let h=document.getElementById("height");
let c=document.getElementById("color");
let btn=document.getElementById("ok")
let d=document.getElementById("div")
let close=document.getElementById("clo")
close.addEventListener("click",function(){
    d.style.display="none"
})
btn.addEventListener("click",function(){
    d.style.width=`${w.value}`+"px"
    d.style.height=`${h.value}`+"px"
    d.style.background=`${c.value}`
    d.style.display="block"
})
