function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

gsap.to('#page>video',{
  scrollTrigger:{
    trigger:"#page>video",
    scroller:"#main",
    start:"2% top",
    end: "bottom top",
    // markers:true
  },
  onStart:()=>{
    document.querySelector("#page video").play()
  }
})

gsap.to("#page",{
  scrollTrigger:{
    trigger:"#page",
    scroller:"#main",
    start:" top top",
    end:"bottom top",
    pin:true,
  }
})

gsap.to("#page-bottom",{
  scrollTrigger:{
    trigger:"#page-bottom",
    scroller:"#main",
    start:" 57% top",
    end:"bottom top",
    // markers:true
  },
  opacity:0,
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page1>p",{
  top:"25%",
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page2>p",{
  top:"25%",
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page3>p",{
  top:"25%",
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page4>p",{
  top:"25%",
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page6>#page6-text",{
  top:"-15%",
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    start:" top top",
    scrub:1,
    // markers:true,
    pin:true
  }
})

tl.to("#page8>#page8-text",{
  top:"-15%",
})