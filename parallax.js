const firstp=document.querySelector("#first");
window.addEventListener('scroll',function(){
    let offset=window.pageYOffset;
    console.log(firstp)
    firstp.style.backgroundPositionY=offset*0.7+"px";
    console.log(offset)
    
})