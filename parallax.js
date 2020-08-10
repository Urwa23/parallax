const firstp=document.querySelector("#first");
window.addEventListener('scroll',function(){
    let offset=window.pageYOffset;
    console.log(firstp)
    firstp.style.backgroundPositionY=offset*0.7+"px";
    console.log(offset)
    
})
const hamburger=document.querySelector('.hamburger');
const navlinks=document.querySelector('.nav-links')
hamburger.addEventListener('click',()=>{
    console.log("wow");
    navlinks.classList.toggle('open');
})
