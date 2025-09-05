 document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
gsap.to(".imageDiv img", {
clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    duration:3,
});
gsap.from("nav",{
y:-200,
duration:3,
opacity:0,
})
gsap.from(".heading1",{
x:100,
duration:2,
opacity:0,
})
gsap.from(".contentDiv p",{
    y:100,
    duration:2,
    opacity:0,
    delay:1,
})
 });


