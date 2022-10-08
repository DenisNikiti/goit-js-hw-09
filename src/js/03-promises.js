
 const formEl = document.querySelector(".form")


  

  
function createPromise(delay) {
  
  return new Promise((resovle, reject) => {
      const shouldResolve = Math.random() > 0.3;         
            setTimeout(() => {
                  if (shouldResolve) {
                        
                resovle(delay)
             }
               reject(delay)
            }, delay);
    
  })



  }


  







formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)

  
    let delay = 0;
  let step = 0;
  let amount =0;


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


  

    for (let index = 1; index <= amount; index += 1) {
      
createPromise(delay)
    .then((delay ) => {
      console.log(`✅ Fulfilled promise ${index} in ${delay}ms`);
        
    })
    .catch((delay ) => {
      console.log(`❌ Rejected promise ${index} in ${delay}ms`);
      
    });

      delay += step
    }


 
 
 

}






 