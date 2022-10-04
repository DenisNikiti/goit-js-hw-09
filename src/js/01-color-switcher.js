
const startEl = document.querySelector("[data-start]")
const stopEl = document.querySelector("[data-stop]")
 let x 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startEl.addEventListener("click", () => {
   x = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
   }, 1000);
    
    stopEl.disabled = false
    startEl.disabled = true
    
})

stopEl.addEventListener("click", () => { 
    stopEl.disabled = true
    startEl.disabled = false
    clearInterval(x)

})