var typed = new Typed(".design", {
   strings: ["Design", "Excellence", "Concepts"],
   typeSpeed: 170,
   backSpeed: 90,
   loop: true,
});

const menu = document.querySelector(".menu");
const drop = document.querySelector(".net");
var isReversed = false;
menu.addEventListener("click", () =>{
   
if (isReversed) {
   isReversed = false;
   drop.classList.add("active");

}
else{
   isReversed =  true;
   drop.classList.remove("active");

}
})