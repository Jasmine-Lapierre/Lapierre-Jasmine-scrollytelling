let anim= gsap.to(".action", {
    opacity:0,
    y:"3vh",
    duration:1.5,
    repeat:-1
})
let animarbre= gsap.to(".arbre", {
    x:"-200vw",
    duration:10,
    repeat:-1
})
let animarbreseul = gsap
  .timeline({ })
  .to(
    document.querySelector('.arbrechat'),
    {
      x: "-100vw",
      duration:3,
    }
  )
  .to(
    document.querySelector('.chatrosesaute'),
    {
    x:"-30vw",
      y: "15vw",
      scale:2
    }
  )
anim.play()
animarbreseul.play()
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

