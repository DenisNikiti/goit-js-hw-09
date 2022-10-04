
 const formEl = document.querySelector(".form")


  

function createPromise(amount, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve()
    } else {
      reject()
    }
  }
    )
    
  }


  






formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)

  let delay = 0;
  let step = 0;
  let amount = 0;
  
       formdata.forEach((value, name) => {
        if (name === "delay") {
          delay = value;
         }   
         if (name === "step") {
           step = value;
         }
         if (name === "amount") {
           amount = value;
         }
  }) 
 
 
createPromise(amount,delay)
  .then(({ amount, delay }) => {
    console.log(`✅ Fulfilled promise ${amount} in ${delay}ms`);
  })
  .catch(({ amount, delay }) => {
    console.log(`❌ Rejected promise ${amount} in ${delay}ms`);
  });






}
  


