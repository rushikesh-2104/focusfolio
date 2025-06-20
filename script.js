let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,   //cursor element will move accordingly with x and y axis points
        y:dets.y,
        duration:1,  //for more smoothness 
        ease:"elastic.out"  //for cursor movement effects
    })
})


var tl = gsap.timeline()
  tl.from("nav h1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
  });

  tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  });

   tl.from(".subcontain1 img", {
    scale:-2,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".subcontain2 h1", {
    y: -20,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".subcontain2 p", {
    y: -20,
    opacity: 0,
    duration: 0.4,
    stagger:0.2,
  });


gsap.to(".section2 .category",{
    transform:"translateX(-360%)",
    scrollTrigger:{                 //use to give effects on scrolling based
        trigger:".section2",           //element to be triggered (write only parent wihle using pin)
        scroller:"body",            //on which part
        // markers:"true",             //use to marks the start and end points to view scroll
        start:"top 0%",             //adjust the starting point 
        end:"top -170%",            //adjust the ending point 
        scrub:5,                    //used to give complete scroll based effect
        pin:true                  //used to pin the element till the effect gets over
    }
})





