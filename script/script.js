let anim= gsap.to(".action", {
    opacity:0,
    y:"3vh",
    duration:1.5,
    repeat:-1
})
anim.play()

let spritesheet = document.querySelector(".spritesheetbody")
let body = document.querySelector("body")
let timer
function removeClass(){
    body.classList.remove('is-scrolling')
}
window.addEventListener("scroll", ()=>{
    clearTimeout(timer)
    body.classList.add('is-scrolling');
    timer = setTimeout(removeClass,100);

});

