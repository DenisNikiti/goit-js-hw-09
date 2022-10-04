
 const formEl = document.querySelector(".form")

const createPromise = new Promise((resolve, reject) =>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve()
  } else {
    reject()
  }
}
 )




formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)

  letdelay = 0
  let step = 0
  let amount = 0
  
       formdata.forEach((value, name) => {
        if (name === "delay") {
          delay = value
         }   
         if (name === "step") {
          step = value
         }
         if (name === "amount") {
          amount = value
         }
  }) 
 
 

createPromise
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });





}
  
