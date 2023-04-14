let anim= gsap.to(".action", {
    opacity:0,
    y:"3vh",
    duration:1.5,
    repeat:-1
})
anim.play()

let spritesheet = document.querySelector(".spritesheetbody")

function minuteur(){
document.querySelector("body").classList.remove('is-scrolling')
}

window.addEventListener("scroll", ()=>{
document.querySelector("body").classList.add('is-scrolling');
setTimeout(minuteur,100);
});

