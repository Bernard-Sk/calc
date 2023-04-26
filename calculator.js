const icon= document.querySelector(".icon")
const details = document.querySelector(".details");
const dicon = document.querySelector(".details .close");

icon.addEventListener("click", () => {
   details.classList.add("active");
})

dicon.addEventListener("click", () => {
   details.classList.remove("active");
});