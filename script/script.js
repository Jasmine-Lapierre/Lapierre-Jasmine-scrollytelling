let anim= gsap.to(".action", {
    opacity:0,
    y:"3vh",
    duration:1.5,
    repeat:-1
})
let animAmpoule= gsap.to(".ampoule", {
  scale:2,
  duration:1,
  repeat:-1,
  yoyo:true
})
let animNonLineaire= gsap.to(".chatnonlineaire", {
  x:"-10vh",
  y:"-10vh",
  rotation:360,
  scale:1.5,
  duration:5,
  repeat:-1,
  yoyo:true,
  ease:"elastic.inOut"
})
let animPetitesEtoiles= gsap.to(".etoile", {
  rotation:360,
  scale:1.5,
  duration:3,
  repeat:-1,
  yoyo:true,
  opacity:0.5
})
let animNuage= gsap.to(".nuage", {
  duration:2,
  x:"1vh",
  y:"1vh",

  repeat:-1,
  yoyo:true,
  ease:"back.inOut"
})
let animBateau= gsap.to(".bateau", {
  rotation:25,
  duration:2,
  repeat:-1,
  yoyo:true,
  ease:"back.inOut"
})

let animVague1= gsap.to(".vaguederriere", {
  rotation:5,
  duration:2,
  repeat:-1,
  yoyo:true,
  ease:"power2.inOut"

})
let animVague2= gsap.to(".vaguedevant", {
  scale:1.2,
    duration:1.8,
  repeat:-1,
  yoyo:true,
  y:-10,
  ease:"power2.inOut"

})
let animarbreDeux = gsap
  .timeline({})
  .to(
    document.querySelector('.arbre'),
    {
      x:"-200vw",
      duration:7,
      ease:"none",
      repeat:-1
    }
  )
  .to(
    document.querySelector('.arbre2'),
    {
      x:"-200vw",
      duration:7,
      ease:"none",
      repeat:-1    },"<2.5"



  )


let animarbreseul = gsap
  .timeline(
    { 

   })
  .to(
    document.querySelector('.arbrechat'),
    {
      x: "-110vw",
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

let animAffaireQuiTombentjsp = gsap
  .timeline(
    { 

   })
  .to(
    document.querySelector('.boucle'),
    {
      x: "-1000%",
      y: "-1000%",
      duration:3,
      repeat:-1,
      ease:"none"

    }
  )
  .to(
    document.querySelector('.collier'),
    {
    x:"1000%",
      y: "1000%",
      duration:3,
      repeat:-1,
      ease:"none"

    },"<"
  )