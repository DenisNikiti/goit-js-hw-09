
 const formEl = document.querySelector(".form")

function createPromise(amount, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
   resolve
  } else {
    
  }
}




formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)

  let delay = 0
  let step = 0
  let amount = 0
  
       formdata.forEach((value, name) => {
        if (name === "delay") {
          Amount = value
         }   
         if (name === "step") {
          step = value
         }
         if (name === "amount") {
          amount = value
         }
  }) 
 
 
createPromise(amount, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });



  }