import { gsap } from "gsap";

const tl = gsap.timeline()

tl.to(".box1",{
    x:1000,
    duration:3,
    ease:"power3.out"
}).to(".box2" ,{
    x:1000,
    duration:3,
    ease:"power3.out"
}).to(".box3" ,{
    x:1000,
    duration:3,
    ease:"power3.out"
}).to(".box4" ,{
    x:1000,
    duration:3,
    ease:"power3.out"
}).to(".box5" ,{
    x:1000,
    duration:3,
    ease:"power3.out"
})