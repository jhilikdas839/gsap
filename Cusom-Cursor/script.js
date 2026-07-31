 let main = document.querySelector("main")
 let cursor = document.querySelector(".cursor")
 let img = document.querySelector(".image")

// clientY , clientX


 main.addEventListener("mousemove" , (dets)=>{

            gsap.to(cursor,{
                x: dets.clientX,
                y:dets.clientY,
                ease: "elastic.out(1,0.3)",
                duration:1,

            })
            
 })


img.addEventListener("mouseenter",()=>{
    cursor.innerText="View More"
    gsap.to(cursor,{
        scale:2,
        duration:1
    })
})

img.addEventListener("mouseleave",()=>{
    cursor.innerText=""
    gsap.to(cursor,{
        scale:1,
        duration:1
    })
})

