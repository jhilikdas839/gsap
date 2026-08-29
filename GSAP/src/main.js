import "./style.css";
import { gsap } from "gsap";

gsap.fromTo(
    ".nav-h4",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        delay: 0.1,
        duration: 0.3,
        ease: "power3.out",
        stagger: {
            each: 0.2,
            from: "start",
        },
    }
);

gsap.fromTo(
    ".content-h1",
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 1,
        ease: "power3.out",
    }
);



gsap.from(".box", {
    y: 200,
    stagger: {
        each: 0.4,
        from: "random",
        grid: "auto"
    }
})


gsap.fromTo(".box", {
    y: 100,
    opacity:0

},
    {
        y:0,
        opacity:1,
         delay: 0.1,
        duration: 1,
        ease: "power3.out",
        stagger: {
            each: 0.7,
            from: "random",
        }



       }


    

)