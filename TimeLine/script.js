import { gsap } from "gsap";

const tl = gsap.timeline()

tl.to(".box1",{
    x:1000,
    duration:1.5,
    ease:"power3.out"
},"jhilik").to(".box2" ,{
    x:1000,
    duration:1.5,
    ease:"power3.out"
},).to(".box3" ,{
    x:1000,
    duration:1.5,
    ease:"power3.out"
},"jhilik").to(".box4" ,{
    x:1000,
    duration:1.5,
    ease:"power3.out"
}).to(".box5" ,{
    x:1000,
    duration:1.5,
    ease:"power3.out"
},"jhilik")


setTimeout(() => {

    tl.reverse()
}, 1000);



//position parameter in time line 

//-=0.3 ->this is used for overlapping effect 
//+=0.3 ->this is used for delay effect 
//0 ->this is used for start effect 
//< ->this is used for parallal effect 
//mylabel ->this is used for same  effect 