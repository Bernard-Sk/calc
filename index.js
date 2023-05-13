const icon= document.querySelector(".icon")
const details = document.querySelector(".details");
const dicon = document.querySelector(".details .close");
// const display = document.querySelector(".")

icon.addEventListener("click", () => {
   details.classList.add("active");
})

dicon.addEventListener("click", () => {
   details.classList.remove("active");
});