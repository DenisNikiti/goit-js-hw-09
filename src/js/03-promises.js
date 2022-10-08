
 const formEl = document.querySelector(".form")

 let delay = 0;
  let step =  0;
  let amount = 0;
  
   
  
function createPromise(time) {
  
  return new Promise((resovle, reject) => {
    const shouldResolve = Math.random() > 0.3; 
    
            setTimeout(() => {
                  if (shouldResolve) {
                resovle(time)
             }
               reject(time)
            }, time);
    
  })



  }


  







formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)

  
 


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
    .then((time ) => {
      console.log(`✅ Fulfilled promise ${index} in ${time}ms`);
      delay = delay + step
      
    })
    .catch((time ) => {
      console.log(`❌ Rejected promise ${index} in ${time}ms`);
      delay = delay + step
        
    });

      
      
    }


 
 
 

}






 